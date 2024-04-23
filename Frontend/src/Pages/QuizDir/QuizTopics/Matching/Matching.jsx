import React from 'react'
import "./Matching.css"
import { useNavigate } from "react-router-dom";
import FooterSearch from "../../../../Components/FooterSearch/FooterSearch.jsx";
import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import Card from "../../../../Components/Card/Card";


function Matching() {
  const navigate = useNavigate();
  return (
<div>
      <Navbar />
      <h1>Flashcards</h1>
      <div onClick={() => navigate("/quiz/matching/alphabet")}>
        <Card title="Alphabet" height="150px" />
      </div>
      <div onClick={() => navigate("/quiz/matching/numbers")}>
        <Card title="Numbers" height="150px" />
      </div>
      <div onClick={() => navigate("/quiz/matching/phrases")}>
        <Card title="Phrases" height="150px" />
      </div>
      <FooterSearch />
    </div>
  )
}

export default Matching