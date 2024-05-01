import React from "react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./QuizTopics.css";

function QuizTopics() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state.quiz);
  return (
    <div>
      <Navbar />
      <div className="quizDirectoryContainer">
        <h1
          onClick={() => navigate("/quiz")}
          className="directory-title quiz-dir-title"
        >
          Fill In
        </h1>
        <div className="quizDirectoryOptionsContainer">
          <div
            className="quiz-options"
            onClick={() =>
              navigate(`/quiz/${state.quiz}`, { state: { search: "abc" } })
            }
          >
            <Card title="Alphabet" width={"140%"} height={"150px"} />
          </div>
          <div
            className="quiz-options"
            onClick={() =>
              navigate(`/quiz/${state.quiz}`, { state: { search: "123" } })
            }
          >
            <Card title="Numbers" width={"140%"} height={"150px"} />
          </div>
        </div>
      </div>
      <FooterSearch />
    </div>
  );
}

export default QuizTopics;
