import React from 'react'
import Navbar from "../../../Components/Navbar/Navbar.jsx"
import Card from "../../../Components/Card/Card.jsx"
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx"
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import "./QuizTopics.css"

function QuizTopics() {
	const navigate = useNavigate();
	const { state } = useLocation();
	console.log(state.quiz);
  return (
    <div>
      <Navbar />
      <h1>Flashcards</h1>
      <div onClick={() => navigate(`/quiz/${state.quiz}`, { state : {search:"abc"}})}>
        <Card title="Alphabet" height="150px" />
      </div>
      <div onClick={() => navigate(`/quiz/${state.quiz}`, { state : {search:"123"}})}>
        <Card title="Numbers" height="150px" />
      </div>
      <div onClick={() => navigate(`/quiz/${state.quiz}`, { state : {search:"phrases"}})}>
        <Card title="Phrases" height="150px" />
      </div>
      <FooterSearch />
    </div>
  );
}

export default QuizTopics
