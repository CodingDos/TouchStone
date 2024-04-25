import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card.jsx";
import { getPunctuation } from "../../Services/characters.js";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";

import "./SpecialCharDir.css";

function SpecialCharDir() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      const test = await getPunctuation();
      setCards(test);
    };
    getCards();
  }, []);

  console.log(cards);

  return (
    <div className="punctuationdir">
      <Navbar />
      <h1 onClick={() => navigate("/home")} className="directory-title">
        Special Characters
      </h1>
      <div className="punctuation-container">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="punctuation-card"
            onClick={() => navigate(`/specialchar/${card.binary}`)}
          >
            <Card
              index={idx}
              width={"70%"}
              height={"30%"}
              title={card.english}
              brailleimg={card.braille_img}
            />
          </div>
        ))}
      </div>

      <FooterSearch />
    </div>
  );
}

export default SpecialCharDir;
