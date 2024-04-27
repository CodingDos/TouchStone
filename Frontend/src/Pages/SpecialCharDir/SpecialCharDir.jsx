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

  // Function to determine if a character adjustment is needed
  function getNameStyle(character) {
    if (character.length > 5) {
      return { fontSize: "20px" }; // Smaller font size for long names
    }
    return {}; // Return an empty object if no adjustment is needed
  }

  console.log(cards);

  return (
    <div className="punctuationdir">
      <Navbar />
      <h1
        onClick={() => navigate("/home")}
        className="directory-title alpha-title"
      >
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
              titleStyle={getNameStyle(card.english)}
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

export default SpecialCharDir;
