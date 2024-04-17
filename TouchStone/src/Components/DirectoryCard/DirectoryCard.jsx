import React from "react";
import { useState, useEffect } from "react";
import "./DirectoryCard.css";

function DirectoryCard() {

  


  return (
    <div className="dircard">
      <div className="dircard-examples">
        <div className="dircard-example1">
          <h3>Aa</h3>
          <img className="dircard-braille-img" src="src/assets/BrailleA.png" />
        </div>
        <div className="dircard-example2">
          <h3>Bb</h3>
          <img className="dircard-braille-img" src="src/assets/BrailleB.png" />
        </div>
        <div className="dircard-example3">
          <h3>Cc</h3>
          <img className="dircard-braille-img" src="src/assets/BrailleC.png" />
        </div>
      </div>
      <h4>Alphabet</h4>
    </div>
  );
}

export default DirectoryCard;
