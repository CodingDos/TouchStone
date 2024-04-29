import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import { getCharacter, getAlphabet } from "../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Alphabet.css";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";

function Alphabet() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  const { id: cardId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getCard = async () => {
      const test = await getCharacter(cardId);
      setCard(test);
    };
    getCard();
  }, [cardId]);

  useEffect(() => {
    const getCards = async () => {
      const test = await getAlphabet();
      setCards(test);
    };
    getCards();
  }, []);

  const onClickBack = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/alphabet/${cards[cards.length - 1].english}`);
    } else {
      navigate(`/alphabet/${cards[previousidx].english}`);
    }
  };

  const onClickForward = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const nextidx = currentidx + 1;
    if (nextidx === 26) {
      navigate(`/alphabet/${cards[0].english}`);
    } else {
      navigate(`/alphabet/${cards[nextidx].english}`);
    }
  };

  return (
    <div className="alphabet">
      <Navbar />
      <div className="alphabet-carosel">
        <h1
          onClick={() => navigate("/alphabetdir")}
          className="directory-title alpha-title"
        >
          Alphabet
        </h1>
        <div className="carosel">
          <Card
            titleStyle={{ fontSize: "60px" }}
            imgStyle={{ height: "140px", width: "100px", margin: "0px" }}
            className="alphacard"
            width={"80%"}
            height={"370px"}
            title={card.english}
            brailleimg={card.braille_img}
            refimg={card.learning_img}
          />
        </div>
        <div className="alphabet-btns alpha-btn">
          <button onClick={onClickBack} className="alphabet-btns-back">
            <i className="fa fa-angle-left"></i>
          </button>
          <button onClick={onClickForward} className="alphabet-btns-forward">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Alphabet;
