import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({
  height,
  width,
  title,
  refimg,
  brailleimg,
  titleStyle,
  imgStyle,
}) {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
      }}
    >
      <h3 className="card-title" style={titleStyle}>
        {title}
      </h3>
      <img className="card-ref-img" src={refimg} style={imgStyle} />
      <img className="card-braille-img" src={brailleimg} style={imgStyle} />
    </div>
  );
}

export default Card;
