import React from "react";
import "./DirectoryCard.css";

function DirectoryCardQuiz(props) {
  return (
    <div className="dircard">
      <div className="dircard-examples">
        <div className="dircard-quiz">
          <img
            style={props.imgStyle}
            className="dircard-braille-img"
            src="src/assets/braille/braille_a_100000.png"
          />
          <i className="fa fa-long-arrow-right"></i>
          <h1 className="question">?</h1>
        </div>
      </div>
      <h4 style={props.dirTitle} className="dircard-heading">
        Quizes
      </h4>
    </div>
  );
}

export default DirectoryCardQuiz;
