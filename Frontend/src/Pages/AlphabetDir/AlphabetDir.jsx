import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card.jsx";
import { getAlphabet } from "../../Services/characters.js";
import "./AlphabetDir.css";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";

function AlphabetDir() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      const test = await getAlphabet();
      setCards(test);
    };
    getCards();
  }, []);

  return (
    <div className="alphabetdir">
      <Navbar />
      <div className="alphabet-container">
        {cards.map((card, idx) => (
          <div
            className="alphabet-card"
            onClick={() => navigate(`/alphabet/${card.english}`)}
          >
            <Card
              index={idx}
              width={"30%"}
              height={"30%"}
              title={card.english}
              brailleimg={card.braille_img}
              refimg={card.learning_img}
            />
          </div>
        ))}
      </div>
      <FooterSearch />
    </div>
  );
}

export default AlphabetDir;
