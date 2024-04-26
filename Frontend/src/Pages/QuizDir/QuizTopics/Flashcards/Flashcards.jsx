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
      <div className="quizDirectoryContainer">
        <h1
          onClick={() => navigate("/quiz")}
          className="directory-title quiz-dir-title"
        >
          Flashcards
        </h1>
        <div className="quizDirectoryOptionsContainer">
          <div
            className="quiz-dir-options"
            onClick={() => navigate("/quiz/flashcards/alphabet/Aa")}
          >
            <Card title="Alphabet" width={"120%"} height={"150px"} />
          </div>
          <div
            className="quiz-dir-options"
            onClick={() => navigate("/quiz/flashcards/numbers/0")}
          >
            <Card title="Numbers" width={"120%"} height={"150px"} />
          </div>
          <div
            className="quiz-dir-options"
            onClick={() => navigate("/quiz/flashcards/phrases")}
          >
            <Card title="Phrases" width={"120%"} height={"150px"} />
          </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Flashcards;
