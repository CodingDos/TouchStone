import React from "react";
import { useNavigate } from "react-router-dom";

import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";
import DirectoryCard from "../../Components/DirectoryCard/DirectoryCard.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

import "./MainDir.css";

function MainDir() {
  const navigate = useNavigate();

  return (
    <div className="maindir">
      <Navbar />
      <div onClick={() => navigate("/alphabetdir")}>
        <DirectoryCard 
        example1="Aa" 
        example2="Bb"
        example3="Cc"
        title="Alphabet"/>
      </div>
      <DirectoryCard 
        example1="1" 
        example2="2"
        example3="3"
        title="Numbers" />
      <DirectoryCard  
        example1="Space" 
        example2="!"
        example3="Letter"
        title="Special Characters"/>
      <DirectoryCard  
        example1="FOR" 
        example2="THE"
        example3="ST"
        title="Combos"/>
      <FooterSearch/>
    </div>
  );
}

export default MainDir;
