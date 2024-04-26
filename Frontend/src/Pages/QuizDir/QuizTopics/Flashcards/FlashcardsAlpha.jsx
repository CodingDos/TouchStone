import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAlphabet } from "../../../../Services/characters.js";
import { getCharacter } from "../../../../Services/characters.js";
import Navbar from "../../../../Components/Navbar/Navbar";
import Card from "../../../../Components/Card/Card.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import ReactFlipCard from "reactjs-flip-card";

function FlashcardsAlpha() {
  const navigate = useNavigate();
  const [alpha, setAlpha] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const { id: cardId } = useParams();

  useEffect(() => {
    const getCards = async () => {
      const alphabet = await getAlphabet();
      setAlpha(alphabet);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCard = async () => {
      const character = await getCharacter(cardId);
      console.log(character);
      setCurrentCard(character);
    };
    getCard();
  }, [cardId]);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const onClickBack = async () => {
    const currentidx = alpha.findIndex((item) => item.english === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/quiz/flashcards/alphabet/${alpha[alpha.length - 1].english}`);
    } else {
      navigate(`/quiz/flashcards/alphabet/${alpha[previousidx].english}`);
    }
  };

  const onClickForward = async () => {
    const currentidx = alpha.findIndex((item) => item.english === cardId);
    const nextidx = currentidx + 1;
    if (nextidx === 26) {
      navigate(`/quiz/flashcards/alphabet/${alpha[0].english}`);
    } else {
      navigate(`/quiz/flashcards/alphabet/${alpha[nextidx].english}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flashcardsAlphabetContainer">
        <div className="flashcardsCaroselContainer">
          <h1
            className="directory-title flash-card-title"
            onClick={() => navigate("/quiz/flashcards/")}
          >
            Alphabet
          </h1>
          <div className="flash-card-flip" onClick={handleFlip}>
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={
                <Card
                  titleStyle={{ fontSize: "80px", margin: "15px" }}
                  imgStyle={{ width: "100px" }}
                  width={"310%"}
                  height={"327%"}
                  title={currentCard.english}
                  refimg={currentCard.learning_img}
                />
              }
              backComponent={
                <Card
                  imgStyle={{ width: "200px" }}
                  width={"310%"}
                  height={"327%"}
                  brailleimg={currentCard.braille_img}
                />
              }
            />
          </div>

          <div className="alphabet-btns">
            <button onClick={onClickBack} className="alphabet-btns-back">
              <i className="fa fa-angle-left"></i>
            </button>
            <p className="tap-to-flip">Tap Card To Flip</p>
            <button onClick={onClickForward} className="alphabet-btns-forward">
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>

      <FooterSearch />
    </div>
  );
}

export default FlashcardsAlpha;
