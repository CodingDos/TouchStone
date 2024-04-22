import "./Flashcards.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../Components/Navbar/Navbar";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Card from "../../../../Components/Card/Card";

function Flashcards() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>Flashcards</h1>
      <div onClick={() => navigate("/quiz/flashcards/alphabet")}>
        <Card title="Alphabet" height="150px" />
      </div>
      <div onClick={() => navigate("/quiz/flashcards/numbers")}>
        <Card title="Numbers" height="150px" />
      </div>
      <div onClick={() => navigate("/quiz/flashcards/phrases")}>
        <Card title="Phrases" height="150px" />
      </div>
      <FooterSearch />
    </div>
  );
}

export default Flashcards;
