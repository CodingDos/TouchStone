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
      <h1
        onClick={() => navigate("/home")}
        className="directory-title alpha-title"
      >
        Alphabet
      </h1>
      {/* <div className="boo"> */}
      <div className="alphabet-container">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="alphabet-card"
            onClick={() => navigate(`/alphabet/${card.english}`)}
          >
            <Card
              imgStyle={{ height: "80px", width: "65px", margin: "0px" }}
              index={idx}
              width={"360px"}
              height={"230px"}
              title={card.english}
              brailleimg={card.braille_img}
              refimg={card.learning_img}
            />
          </div>
        ))}
      </div>
      {/* </div> */}
      <FooterSearch />
    </div>
  );
}

export default AlphabetDir;
