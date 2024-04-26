import "./QuizDir.css";
import Card from "../../Components/Card/Card.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import { useNavigate } from "react-router-dom";

function QuizDir() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="quizDirectoryContainer">
        <h1
          onClick={() => navigate("/home")}
          className="directory-title quiz-dir-title"
        >
          Quiz
        </h1>
        <div className="quizDirectoryOptionsContainer">
          <div
            className="quiz-dir-options"
            onClick={() => navigate("/quiz/flashcards")}
          >
            <Card title="Flashcards" width={"120%"} height={"150px"} />
          </div>
          <div
            className="quiz-dir-options"
            onClick={() => navigate("/quiz/matching")}
          >
            <Card title="Matching" width={"120%"} height={"150px"} />
          </div>
          <div
            className="quiz-dir-options"
            onClick={() =>
              navigate("/quiz/topics", { state: { quiz: "fillin" } })
            }
          >
            <Card title="Fill In" width={"120%"} height={"150px"} />
          </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default QuizDir;
