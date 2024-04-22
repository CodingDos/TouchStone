import "./QuizDir.css";
import Card from "../../Components/Card/Card.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import { useNavigate } from "react-router-dom";

function QuizDir() {
  const navigate = useNavigate();

  return (
    <div className="quizDirectoryContainer">
      <Navbar />
      QuizDir
      <div className="quizDirectoryOptionsContainer">
        <div onClick={() => navigate("/quiz/flashcards")}>
          <Card title="Flashcards" height="150px" />
        </div>
        <div onClick={() => navigate("/quiz/matching")}>
          <Card title="Matching" height="150px" />
        </div>
        <div onClick={() => navigate("/quiz/fillin")}>
          <Card title="Fill In" height="150px" />
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default QuizDir;
