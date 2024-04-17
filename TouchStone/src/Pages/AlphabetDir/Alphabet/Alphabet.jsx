import React from "react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import "./Alphabet.css";

function Alphabet() {




  return (
    <div className="alphabet">
      <Navbar />
      <div className="alphabet-carosel">
        <ul className="carosel">
        <Card className="alphacard" width={"80%"} height={"auto"} />
        <Card className="alphacard" width={"80%"} height={"auto"}  />
        <Card className="alphacard" width={"80%"} height={"auto"}  /> 
        <Card className="alphacard" width={"80%"} height={"auto"}  /> 
        <Card className="alphacard" width={"80%"} height={"auto"}  /> 
        </ul>
      </div>
    </div>
  );
}

export default Alphabet;
