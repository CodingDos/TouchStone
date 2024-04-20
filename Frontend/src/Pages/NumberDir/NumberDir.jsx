import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import { getNumbers } from "../../Services/characters";
import FooterSearch from "../../Components/FooterSearch/FooterSearch";
import "./NumberDir.css";

function NumberDir() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      const test = await getNumbers();
      setCards(test);
    };
    getCards();
  }, []);

  console.log(cards);

  return (
    <div className="numberdir">
      <Navbar />
      <div className="number-container">
        {cards.map((card, idx) => (
          <div
            className="number-card"
            onClick={() => navigate(`/number/${card.english}`)}
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

export default NumberDir;
