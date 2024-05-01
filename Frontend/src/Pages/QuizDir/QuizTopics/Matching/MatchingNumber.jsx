import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Card from "../../../../Components/Card/Card.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNumbers, getAlphabet } from "../../../../Services/characters.js";
import "./Matching.css";
import "../../../../Components/Card/Card.css"

function MatchingNumber() {
  const navigate = useNavigate();

  const [pairs, setPairs] = useState([]);
  const [brailleImg, setBrailleImg] = useState([]);

  const [selectedNumCard, setSelectedNumCard] = useState(null);
  const [selectedBinaryCard, setSelectedBinaryCard] = useState(null);

  const [matchedNumCards, setMatchedNumCards] = useState([]);
  const [matchedBinaryCards, setMatchedBinaryCards] = useState([]);

  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    // Fetch alphabet data
    getNumbers().then((data) => {
      // Shuffle the alphabet data
      const shuffledNumbers = shuffleArray(data);
      // console.log(shuffledNumbers);
      // Select 6 unique letters
      const uniqueNumbers = selectUniqueAndShuffle(shuffledNumbers, 6);
      // console.log(uniqueNumbers);
      setPairs(uniqueNumbers);
      const shuffledBraille = selectUniqueAndShuffle(uniqueNumbers, 6);
      setBrailleImg(shuffledBraille);
      // console.log(shuffledBraille);
    });
  }, []);

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to select unique letters
  const selectUniqueAndShuffle = (number, count) => {
    const uniqueNumbers = [];
    const selectedIndexes = new Set();
    while (uniqueNumbers.length < count) {
      const randomIndex = Math.floor(Math.random() * number.length);
      if (!selectedIndexes.has(randomIndex)) {
        selectedIndexes.add(randomIndex);
        uniqueNumbers.push(number[randomIndex]);
      }
    }
    return uniqueNumbers;
  };

  useEffect(() => {
    // Check for a match whenever both selected cards are set
    if (selectedNumCard && selectedBinaryCard) {
      checkMatch();
    }
  }, [selectedNumCard, selectedBinaryCard]);

  const handleNumCardClick = (index) => {
    const clickedCard = pairs[index];
    console.log(clickedCard);
    setSelectedNumCard(clickedCard);
  };

  const handleBinaryCardClick = (index) => {
    const clickedCard = brailleImg[index];
    console.log(index);
    console.log(clickedCard);
    setSelectedBinaryCard(clickedCard);
  };

  const checkMatch = () => {
    if (selectedNumCard.id === selectedBinaryCard.id) {
      console.log("Correct!");
      setFeedbackMessage("Correct!");
      setMatchedNumCards([...matchedNumCards, selectedNumCard]);
      setMatchedBinaryCards([...matchedBinaryCards, selectedBinaryCard]);
    } else {
      console.log("Incorrect!");
      setFeedbackMessage("Try Again");
    }
    // Reset selected cards
    setSelectedNumCard(null);
    setSelectedBinaryCard(null);
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="matching-title">
            <h2 className="match-title" onClick={() => navigate("/quiz/matching/")}>Number</h2>
            <h3 className="match-title">Match The Cards</h3>
        </div>

        {matchedNumCards.length !== 6 && feedbackMessage && (
  <div className={`feedback-message ${feedbackMessage === 'Correct!' ? 'correct-feedback' : 'incorrect-feedback'}`}>
    {feedbackMessage}
  </div>
)}
{matchedNumCards.length === 6 && (
  <>
  <h3 className="quiz-complete">Great Work!</h3>
  <button className="refresh-button" onClick={() => window.location.reload()}>Keep Going</button>
  </>
)}
        <div className="matching-alpha-container">
          <div className="letter-card-matching">
            {pairs.map(
              (pair, index) =>
                !matchedNumCards.some(
                  (matchedCard) => matchedCard.id === pair.id
                ) && (
                  <div
                    key={index}
                    className="matching-card"
                    onClick={() => handleNumCardClick(index)}
                  >
                    <Card
                      className="matching-height"
                      height="-webkit-fill-available"
                      title={pair.english}
                      refimg={pair.learning_img}
                    />
                  </div>
                )
            )}
          </div>
          <div className="braille-card-matching">
            {brailleImg.map(
              (braille, index) =>
                !matchedBinaryCards.some(
                  (matchedCard) => matchedCard.id === braille.id
                ) && (
                  <div
                    key={index}
                    className="matching-card"
                    onClick={() => handleBinaryCardClick(index)}
                  >
                    <Card
                      className="matching-height"
                      height="-webkit-fill-available"
                      brailleimg={braille.braille_img}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default MatchingNumber