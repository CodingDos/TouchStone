import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card.jsx";
import "./AlphabetDir.css";
import FooterSearch from "../../Components/FooterSearch/FooterSearch.jsx";

function AlphabetDir() {
  return (
    <div className="alphabetdir">
      <Navbar />
      <Card width={'30%'} height={'30%'} />
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <Card width={'30%'} height={'30%'}/>
      <FooterSearch/>
    </div>
  );
}

export default AlphabetDir;
