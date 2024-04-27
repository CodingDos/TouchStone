import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNumbers } from "../../../../Services/characters.js";
import { getCharacter } from "../../../../Services/characters.js";
import Navbar from "../../../../Components/Navbar/Navbar";
import Card from "../../../../Components/Card/Card.jsx";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import ReactFlipCard from "reactjs-flip-card";

function FlashcardsNumber() {
  const navigate = useNavigate();
  const [num, setNum] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const { id: cardId } = useParams();

  useEffect(() => {
    const getCards = async () => {
      const test = await getNumbers();
      setNum(test);
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
    const currentidx = num.findIndex((item) => item.english === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/quiz/flashcards/numbers/${num[num.length - 1].english}`);
    } else {
      navigate(`/quiz/flashcards/numbers/${num[previousidx].english}`);
    }
    setIsFlipped(false);
  };

  const onClickForward = async () => {
    const currentidx = num.findIndex((item) => item.english === cardId);
    const nextidx = currentidx + 1;
    if (nextidx === 10) {
      navigate(`/quiz/flashcards/numbers/${num[0].english}`);
    } else {
      navigate(`/quiz/flashcards/numbers/${num[nextidx].english}`);
    }
    setIsFlipped(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flashcardsAlphabetContainer">
        <div className="flashcardsCaroselContainer">
          <h1
            className="directory-title flash-card-title alpha-title"
            onClick={() => navigate("/quiz/flashcards/")}
          >
            Numbers
          </h1>
          <div className="flash-card-flip" onClick={handleFlip}>
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={
                <Card
                  titleStyle={{ fontSize: "100px", margin: "85px" }}
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

export default FlashcardsNumber;
