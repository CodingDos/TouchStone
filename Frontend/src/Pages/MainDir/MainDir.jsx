import React from "react";
import { useNavigate } from "react-router-dom";

import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import DirectoryCard from "../../Components/DirectoryCard/DirectoryCard.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

import "./MainDir.css";
import DirectoryCardPhrase from "../../Components/DirectoryCard/DirectoryCardPhrase.jsx";
import DirectoryCardQuiz from "../../Components/DirectoryCard/DirectoryCardQuiz.jsx";

function MainDir() {
  const navigate = useNavigate();

  return (
    <div className="maindir">
      <Navbar />
      <div onClick={() => navigate("/alphabetdir")}>
        <DirectoryCard
          titleStyle={{ fontSize: "40px", margin: "0px" }}
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "10px" }}
          example1="Aa"
          example2="Bb"
          example3="Cc"
          title="Alphabet"
        />
      </div>
      <div onClick={() => navigate("/numberdir")}>
        <DirectoryCard
          titleStyle={{ fontSize: "40px", margin: "0px" }}
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "10px" }}
          example1="Aa"
          example1="1"
          example2="2"
          example3="3"
          title="Numbers"
        />
      </div>
      <div onClick={() => navigate("/specialchardir")}>
        <DirectoryCard
          titleStyle={{ fontSize: "25px", margin: "10px" }}
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "10px" }}
          example1="Space"
          example2="!"
          example3="Letter"
          title="Punctuation & Indicators"
        />
      </div>
      <div onClick={() => navigate("/combodir")}>
        <DirectoryCard
          titleStyle={{ fontSize: "40px", margin: "10px" }}
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "10px" }}
          example1="ER"
          example2="CH"
          example3="ST"
          title="Combinations"
        />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases")}>
        <DirectoryCardPhrase
          titleStyle={{ fontSize: "25px", margin: "10px" }}
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "10px" }}
          title="Hello"
          category="Common Phrases"
        />
      </div>
      <div onClick={() => navigate("/quiz")}>
        <DirectoryCardQuiz
          imgStyle={{ height: "80px", margin: "0px" }}
          dirTitle={{ fontSize: "20px", margin: "0 0 10px 0" }}
        />
      </div>
      <FooterSearch />
    </div>
  );
}

export default MainDir;
