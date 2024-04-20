import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import { getCharacter } from "../../../Services/characters.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Alphabet.css";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";

function Alphabet() {
  const [card, setCard] = useState([]);
  const {id: cardId} = useParams()
  
  useEffect(() => {
    const getCard = async () => {
      const test = await getCharacter(cardId);
      setCard(test);
    };
    getCard();
  }, []);



  return (
    <div className="alphabet">
      <Navbar />
      <div className="alphabet-carosel">
        <div className="carosel">
        <Card className="alphacard" 
        width={"80%"} 
        height={"auto"}
        title={card.english}
        brailleimg={card.braille_img}
        refimg={card.learning_img} 
        />
        </div>
        <div className="alphabet-btns">
          <button className="alphabet-btns-back"><i class='fa fa-angle-left' ></i></button>
          <button className="alphabet-btns-forward"><i class='fa fa-angle-right'></i></button>
        </div>
      </div>
      <FooterSearch/>
    </div>
  );
}

export default Alphabet;
