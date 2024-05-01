import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import { getCharacter, getPunctuation } from "../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";

import "./SpecialChar.css";

function SpecialChar() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  const { id: cardId } = useParams();
  console.log(cardId);

  const navigate = useNavigate();

  useEffect(() => {
    const getCard = async () => {
      const test = await getCharacter(cardId);
      console.log(test);
      setCard(test);
    };
    getCard();
  }, [cardId]);

  useEffect(() => {
    const getCards = async () => {
      const test = await getPunctuation();
      setCards(test);
    };
    getCards();
  }, []);

  const onClickBack = async () => {
    const currentidx = cards.findIndex((item) => item.binary === cardId);
    const previousidx = currentidx - 1;
    if (previousidx === -1) {
      navigate(`/specialchar/${cards[cards.length - 1].binary}`);
    } else {
      navigate(`/specialchar/${cards[previousidx].binary}`);
    }
  };

  const onClickForward = async () => {
    const currentidx = cards.findIndex((item) => item.binary === cardId);
    const nextidx = currentidx + 1;
    console.log(currentidx, nextidx);
    if (nextidx === 19) {
      navigate(`/specialchar/${cards[0].binary}`);
    } else {
      navigate(`/specialchar/${cards[nextidx].binary}`);
    }
  };

  // Function to determine if a character adjustment is needed
  function getNameStyle(character) {
    if (character && character.length > 4) {
      return { fontSize: "45px", margin: "15px" }; // Smaller font size for long names
    }
    return {}; // Return an empty object if no adjustment is needed
  }

  return (
    <div className="punctuation">
      <Navbar />
      <div className="punctuation-carosel">
        <h1
          onClick={() => navigate("/specialchardir")}
          className="directory-title alpha-title"
        >
          Special Characters
        </h1>
        <div className="carosel">
          <Card
            titleStyle={{
              fontSize: "80px",
              margin: "15px",
              ...getNameStyle(card.english),
            }}
            className="punctuationcard"
            width={"80%"}
            height={"360px"}
            title={card.english}
            brailleimg={card.braille_img}
          />
        </div>
        <div className="punctuation-btns alpha-btn">
          <button onClick={onClickBack} className="punctuation-btns-back">
            <i className="fa fa-angle-left"></i>
          </button>
          <button onClick={onClickForward} className="punctuation-btns-forward">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default SpecialChar;
