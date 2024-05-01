import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Card from "../../../../Components/Card/Card.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAlphabet } from "../../../../Services/characters.js";
import "./Matching.css";
import "../../../../Components/Card/Card.css"

function MatchingAlpha() {
  const [pairs, setPairs] = useState([]);
  const [brailleImg, setBrailleImg] = useState([]);

  const [selectedAlphaCard, setSelectedAlphaCard] = useState(null);
  const [selectedBinaryCard, setSelectedBinaryCard] = useState(null);

  const [matchedAlphaCards, setMatchedAlphaCards] = useState([]);
  const [matchedBinaryCards, setMatchedBinaryCards] = useState([]);

  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    // Fetch alphabet data
    getAlphabet().then((data) => {
      // Shuffle the alphabet data
      const shuffledAlphabet = shuffleArray(data);
      console.log(shuffledAlphabet);
      // Select 6 unique letters
      const uniqueLetters = selectUniqueAndShuffle(shuffledAlphabet, 6);
      console.log(uniqueLetters);
      setPairs(uniqueLetters);
      const shuffledBraille = selectUniqueAndShuffle(uniqueLetters, 6);
      setBrailleImg(shuffledBraille);
      console.log(shuffledBraille);
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
  const selectUniqueAndShuffle = (alphabet, count) => {
    const uniqueLetters = [];
    const selectedIndexes = new Set();
    while (uniqueLetters.length < count) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      if (!selectedIndexes.has(randomIndex)) {
        selectedIndexes.add(randomIndex);
        uniqueLetters.push(alphabet[randomIndex]);
      }
    }
    return uniqueLetters;
  };

  useEffect(() => {
    // Check for a match whenever both selected cards are set
    if (selectedAlphaCard && selectedBinaryCard) {
      checkMatch();
    }
  }, [selectedAlphaCard, selectedBinaryCard]);

  const handleAlphaCardClick = (index) => {
    const clickedCard = pairs[index];
    console.log(clickedCard);
    setSelectedAlphaCard(clickedCard);
  };

  const handleBinaryCardClick = (index) => {
    const clickedCard = brailleImg[index];
    console.log(index);
    console.log(clickedCard);
    setSelectedBinaryCard(clickedCard);
  };

  const checkMatch = () => {
    if (selectedAlphaCard.id === selectedBinaryCard.id) {
      console.log("Correct!");
      setFeedbackMessage("Correct!");
      setMatchedAlphaCards([...matchedAlphaCards, selectedAlphaCard]);
      setMatchedBinaryCards([...matchedBinaryCards, selectedBinaryCard]);
    } else {
      console.log("Incorrect!");
      setFeedbackMessage("Try Again");

    }
    // Reset selected cards
    setSelectedAlphaCard(null);
    setSelectedBinaryCard(null);
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="matching-title">
            <h2 className="match-title">Alphabet</h2>
            <h3 className="match-title">Match The Cards</h3>
        </div>
        {feedbackMessage && (
  <div className={`feedback-message ${feedbackMessage === 'Correct!' ? 'correct-feedback' : 'incorrect-feedback'}`}>
    {feedbackMessage}
  </div>
)}
{matchedAlphaCards.length === 6 && (
  <button onClick={() => window.location.reload()}>Refresh</button>
)}
        <div className="matching-alpha-container">
          <div className="letter-card-matching">
            {pairs.map(
              (pair, index) =>
                !matchedAlphaCards.some(
                  (matchedCard) => matchedCard.id === pair.id
                ) && (
                  <div
                    key={index}
                    className="matching-card"
                    onClick={() => handleAlphaCardClick(index)}
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

export default MatchingAlpha;
