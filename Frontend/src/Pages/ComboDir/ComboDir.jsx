import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card.jsx";
import { getCombos } from "../../Services/characters.js";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import "./ComboDir.css";

function ComboDir() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      const test = await getCombos();
      setCards(test);
    };
    getCards();
  }, []);

  console.log(cards)

  return (
    <div className="combodir">
      <Navbar />
      <div className="combo-container">
        {cards.map((card, idx) => (
          <div
            className="combo-card"
            onClick={() => navigate(`/combo/${card.english}`)}
          >
            <Card
              index={idx}
              width={"30%"}
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

export default ComboDir;
