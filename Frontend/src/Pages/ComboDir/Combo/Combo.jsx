import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import { getCharacter, getCombos } from "../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";
import "./Combo.css";

function Combo() {
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
      const test = await getCombos();
      setCards(test);
    };
    getCards();
  }, []);

  const onClickBack = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/combo/${cards[cards.length - 1].english}`);
    } else {
      navigate(`/combo/${cards[previousidx].english}`);
    }
  };

  const onClickForward = async () => {
    const currentidx = cards.findIndex((item) => item.english === cardId);
    const nextidx = currentidx + 1;
    if (nextidx === 19) {
      navigate(`/combo/${cards[0].english}`);
    } else {
      navigate(`/combo/${cards[nextidx].english}`);
    }
  };

  return (
    <div className="combo">
      <Navbar />
      <div className="combo-carosel">
        <h1
          onClick={() => navigate("/combodir")}
          className="directory-title alpha-title"
        >
          Combos
        </h1>
        <div className="carosel">
          <Card
            titleStyle={{ fontSize: "80px" }}
            className="combocard"
            width={"80%"}
            height={"375px"}
            title={card.english}
            brailleimg={card.braille_img}
          />
        </div>
        <div className="combo-btns alpha-btn">
          <button onClick={onClickBack} className="combo-btns-back ">
            <i className="fa fa-angle-left"></i>
          </button>
          <button onClick={onClickForward} className="combo-btns-forward">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>

      <FooterSearch />
    </div>
  );
}

export default Combo;
