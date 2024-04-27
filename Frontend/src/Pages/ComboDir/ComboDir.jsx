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

  console.log(cards);

  return (
    <div className="combodir">
      <Navbar />
      <h1
        onClick={() => navigate("/home")}
        className="directory-title alpha-title"
      >
        Combos
      </h1>
      <div className="combo-container">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="combo-card"
            onClick={() => navigate(`/combo/${card.english}`)}
          >
            <Card
              index={idx}
              imgStyle={{ width: "80px" }}
              width={"360px"}
              height={"200px"}
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
