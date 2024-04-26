import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPhrases, getCharacter } from "../../../../Services/characters.js";
import Navbar from "../../../../Components/Navbar/Navbar";
import Card from "../../../../Components/Card/Card.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import ReactFlipCard from "reactjs-flip-card";

function FlashcardsPhrases() {
  const navigate = useNavigate();
  const [phrases, setPhrases] = useState([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  function doubleIt(str) {
    let double = "";
    for (let i = 0; i < str.length; i++) {
      double += str[i] + str[i].toLowerCase();
    }
    return double;
  }

  // Shuffle array using the Fisher-Yates (Durstenfeld) shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  useEffect(() => {
    const fetchPhrases = async () => {
      const response = await getPhrases();
      shuffleArray(response); // Shuffle the fetched phrases
      const selectedPhrases = response.slice(0, 15); // Select the first 15 items of the shuffled array

      const phrasesWithBraille = await Promise.all(
        selectedPhrases.map(async (phrase) => {
          const searchPhrase = doubleIt(phrase.phrase.toUpperCase());
          const searchArray = searchPhrase.match(/.{2}/g) || [];
          const imgArr = await Promise.all(
            searchArray.map((code) => getCharacter(code))
          );
          return {
            ...phrase,
            brailleImages: imgArr.map((img) => img.braille_img),
          };
        })
      );
      setPhrases(phrasesWithBraille);
    };

    fetchPhrases();
  }, []);

  const currentCard = phrases[currentPhraseIndex] || {};

  const onClickBack = () => {
    setCurrentPhraseIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : phrases.length - 1
    );
    setIsFlipped(false);
  };

  const onClickForward = () => {
    setCurrentPhraseIndex((prevIndex) =>
      prevIndex < phrases.length - 1 ? prevIndex + 1 : 0
    );
    setIsFlipped(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flashcardsAlphabetContainer" onClick={handleFlip}>
        <div className="flashcardsCaroselContainer">
          <h1
            className="directory-title flash-card-title"
            onClick={() => navigate("/quiz/flashcards/")}
          >
            Phrases
          </h1>

          {/* {!isFlipped ? (
          <Card
            className="alphacard"
            width={"85%"}
            height={"450px"}
            title={currentCard.phrase}
            refimg={currentCard.img}
          />
        ) : (
          currentCard.brailleImages &&
          currentCard.brailleImages.map((imgSrc, index) => (
            <img
              key={index}
              className="dircard-braille-img"
              src={imgSrc}
              alt="Braille"
            />
          ))
        )} */}

          <div className="flash-card-flip-phrases" onClick={handleFlip}>
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={
                <Card
                  titleStyle={{ fontSize: "60px", margin: "15px" }}
                  imgStyle={{ width: "190px" }}
                  width={"310%"}
                  height={"327%"}
                  title={currentCard.phrase}
                  refimg={currentCard.img}
                />
              }
              backComponent={
                <div className="flash-phrases">
                  <div className="flash-phrase-braille">
                    {currentCard.brailleImages &&
                      currentCard.brailleImages.map((imgSrc, index) => (
                        <img
                          key={index}
                          className="dircard-braille-img"
                          src={imgSrc}
                          alt="Braille"
                        />
                      ))}
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <div className="alphabet-btns">
          <button className="alphabet-btns-back" onClick={onClickBack}>
            <i className="fa fa-angle-left"></i>
          </button>
          <p>Tap Card To Flip</p>
          <button className="alphabet-btns-forward" onClick={onClickForward}>
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default FlashcardsPhrases;
