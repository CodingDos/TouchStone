import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card.jsx";
import "./AlphabetDir.css";

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
    </div>
  );
}

export default AlphabetDir;
