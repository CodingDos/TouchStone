import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Card from "../../../../Components/Card/Card.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getNumbers,
  getAlphabet,
  getPhrases,
} from "../../../../Services/characters.js";
import "./Matching.css";
import "../../../../Components/Card/Card.css";
import DirectoryCardPhrase from "../../../../Components/DirectoryCard/DirectoryCardPhrase.jsx";

function MatchingPhrases() {
  const [pairs, setPairs] = useState([]);
  const [brailleImg, setBrailleImg] = useState([]);

  const [selectedPhCard, setSelectedPhCard] = useState(null);
  const [selectedBinaryCard, setSelectedBinaryCard] = useState(null);

  const [matchedPhCards, setMatchedPhCards] = useState([]);
  const [matchedBinaryCards, setMatchedBinaryCards] = useState([]);

  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    // Fetch alphabet data
    getPhrases().then((data) => {
      // Shuffle the alphabet data
      const shuffledPhrases = shuffleArray(data);
      console.log(shuffledPhrases);
      // Select 6 unique letters
      const uniquePhrases = selectUniqueAndShuffle(shuffledPhrases, 2);
      console.log(uniquePhrases);
      setPairs(uniquePhrases);
      const shuffledBraille = selectUniqueAndShuffle(uniquePhrases, 2);
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
  const selectUniqueAndShuffle = (phrase, count) => {
    const uniquePhrases = [];
    const selectedIndexes = new Set();
    while (uniquePhrases.length < count) {
      const randomIndex = Math.floor(Math.random() * phrase.length);
      if (!selectedIndexes.has(randomIndex)) {
        selectedIndexes.add(randomIndex);
        uniquePhrases.push(phrase[randomIndex]);
      }
    }
    return uniquePhrases;
  };

  useEffect(() => {
    // Check for a match whenever both selected cards are set
    if (selectedPhCard && selectedBinaryCard) {
      checkMatch();
    }
  }, [selectedPhCard, selectedBinaryCard]);

  const handleNumCardClick = (index) => {
    const clickedCard = pairs[index];
    console.log(clickedCard);
    setSelectedPhCard(clickedCard);
  };

  const handleBinaryCardClick = (index) => {
    const clickedCard = brailleImg[index];
    console.log(index);
    console.log(clickedCard);
    setSelectedBinaryCard(clickedCard);
  };

  const checkMatch = () => {
    if (selectedPhCard.id === selectedBinaryCard.id) {
      console.log("Correct!");
      setFeedbackMessage("Correct!");
      setMatchedPhCards([...matchedPhCards, selectedPhCard]);
      setMatchedBinaryCards([...matchedBinaryCards, selectedBinaryCard]);
    } else {
      console.log("Incorrect!");
      setFeedbackMessage("Try Again");
    }
    // Reset selected cards
    setSelectedPhCard(null);
    setSelectedBinaryCard(null);
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="matching-title">
          <h2 className="match-title">Phrases</h2>
          <h3 className="match-title">Match The Cards</h3>
        </div>
        {feedbackMessage && (
          <div
            className={`feedback-message ${
              feedbackMessage === "Correct!"
                ? "correct-feedback"
                : "incorrect-feedback"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
        <div
          className="matching-alpha-container"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <div className="letter-card-matching">
            {pairs.map(
              (pair, index) =>
                !matchedPhCards.some(
                  (matchedCard) => matchedCard.id === pair.id
                ) && (
                  <div
                    key={index}
                    className="matching-card"
                    style={{ width: "auto" }}
                    onClick={() => handleNumCardClick(index)}
                  >
                    <Card
                      className="matching-height"
                      height="-webkit-fill-available"
                      width="250px"
                      title={pair.phrase}
                      refimg={pair.img}
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
                    style={{ width: "auto", height: "auto" }}
                    onClick={() => handleBinaryCardClick(index)}
                  >
                    <div
                      className="dircard"
                      style={{
                        height: "min-content",
                        width: "250px",
                        padding: "15px",
                      }}
                    >
                      <div className="phrase-container">
                        <DirectoryCardPhrase
                          titleStyle={{ display: "none" }}
                          title={braille.phrase}
                        />
                      </div>
                    </div>
                    {/* <DirectoryCardPhrase
                      // className="matching-height"
                      // height="-webkit-fill-available"
                      // brailleimg={braille.braille_img}
                      title={braille.phrase} 

                    /> */}
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

export default MatchingPhrases;
