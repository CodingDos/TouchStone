import React from "react";
import { useState, useEffect } from "react";
import "./DirectoryCard.css";

function DirectoryCard(props) {

  


  return (
    <div className="dircard">
      <div className="dircard-examples">
        <div className="dircard-example1">
          <h3>{props.example1}</h3>
          <img className="dircard-braille-img" src="src/assets/braille/braille_a_100000.png" />
        </div>
        <div className="dircard-example2">
          <h3>{props.example2}</h3>
          <img className="dircard-braille-img" src="src/assets/braille/braille_b_110000.png" />
        </div>
        <div className="dircard-example3">
          <h3>{props.example3}</h3>
          <img className="dircard-braille-img" src="src/assets/braille/braille_c_100100.png" />
        </div>
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default DirectoryCard;
