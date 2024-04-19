import React from "react";
import Navbar from "../../../Components/Navbar/Navbar.jsx";
import Card from "../../../Components/Card/Card.jsx";
import "./Alphabet.css";
import FooterSearch from "../../../Components/FooterSearch/FooterSearch.jsx";

function Alphabet() {




  return (
    <div className="alphabet">
      <Navbar />
      <div className="alphabet-carosel">
        <ul className="carosel">
        <Card className="alphacard" width={"80%"} height={"auto"} />
        </ul>
        <div className="alphabet-btns">
          <button className="alphabet-btns-back"><i class='fa fa-angle-left' ></i></button>
          <button className="alphabet-btns-forward"><i class='fa fa-angle-right'></i></button>
        </div>
      </div>
      <FooterSearch/>
    </div>
  );
}

export default Alphabet;
