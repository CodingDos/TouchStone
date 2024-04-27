import "./Matching.css";
import { useNavigate } from "react-router-dom";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import Card from "../../../../Components/Card/Card";

function Matching() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="quizDirectoryContainer">
        <h1
          className="directory-title quiz-dir-title alpha-title"
          onClick={() => navigate("/quiz")}
        >
          Matching
        </h1>
        <div className="quizDirectoryOptionsContainer">
          <div
            className="quiz-options"
            onClick={() => navigate("/quiz/matching/alphabet")}
          >
            <Card title="Alphabet" width={"140%"} height={"150px"} />
          </div>
          <div
            className="quiz-options"
            onClick={() => navigate("/quiz/matching/numbers")}
          >
            <Card title="Numbers" width={"140%"} height={"150px"} />
          </div>
          <div
            className="quiz-options"
            onClick={() => navigate("/quiz/matching/phrases")}
          >
            <Card title="Phrases" width={"140%"} height={"150px"} />
          </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default Matching;
