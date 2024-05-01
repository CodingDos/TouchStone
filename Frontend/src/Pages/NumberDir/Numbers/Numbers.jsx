import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import {
  getAlphabet,
  getCharacter,
  getNumbers,
} from "../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";
import "./Numbers.css";

function Numbers() {
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
      const test = await getNumbers();
      setCards(test);
    };
    getCards();
  }, []);

  const onClickBack = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/number/${cards[cards.length - 1].english}`);
    } else {
      navigate(`/number/${cards[previousidx].english}`);
    }
  };

  const onClickForward = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const nextidx = currentidx + 1;
    if (nextidx === 10) {
      navigate(`/number/${cards[0].english}`);
    } else {
      navigate(`/number/${cards[nextidx].english}`);
    }
  };

  return (
    <div className="number">
      <Navbar />
      <div className="number-carosel">
        <h1
          onClick={() => navigate("/numberdir")}
          className="directory-title alpha-title"
        >
          Numbers
        </h1>
        <div className="carosel">
          <Card
            titleStyle={{ fontSize: "80px", margin: "15px" }}
            imgStyle={{ width: "130px" }}
            className="numcard"
            width={"80%"}
            height={"370px"}
            title={card.english}
            brailleimg={card.braille_img}
          />
        </div>
        <div className="number-btns alpha-btn">
          <button onClick={onClickBack} className="number-btns-back">
            <i className="fa fa-angle-left"></i>
          </button>
          <button onClick={onClickForward} className="number-btns-forward">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Numbers;
