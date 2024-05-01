import React from "react";
import { useState, useEffect } from "react";
import { getCharacter } from "../../Services/characters.js";
import "./DirectoryCard.css";

function DirectoryCardPhrase(props) {
  const [phrase, setPhrase] = useState();

  function doubleIt(str) {
    let double = "";
    for (let i = 0; i < str.length; i++) {
      double += str[i] + str[i].toLowerCase();
    }
    return double;
  }
  if (props.title) {
    useEffect(() => {
      if (!props.title) return; // Only proceed if title is non-null and non-undefined
      const phrase = props.title.toUpperCase();
      const searchPhrase = doubleIt(phrase);
      const searchArray = searchPhrase.match(/.{2}/g);
      async function processWord(searchArray) {
        const promise = searchArray.map((code) => getCharacter(code));
        const imgArr = await Promise.all(promise);
        setPhrase(imgArr);
      }
      processWord(searchArray);
    }, [props.title]);
  }

  if (!props.title) {
    return <div>Loading...</div>; // Render loading state or null if title isn't available
  }

  // Function to determine if a character adjustment is needed
  function getNameStyle(title) {
    if (title && title.length > 7) {
      return { fontSize: "40px" }; // Smaller font size for long names
    }
    return {}; // Return an empty object if no adjustment is needed
  }

  return (
    <div>
      <div className="dircard-examples">
        <div
          style={{
            width: props.width,
            height: props.height,
          }}
          className="dircard-example1"
        >
          <h3 className="card-title" style={getNameStyle(props.title)}>
            {props.title}
          </h3>
          <div className="dircard-ref-img">
            {props.img ? (
              <img
                src={props.img}
                style={props.imgStyle}
                alt="Descriptive text"
              />
            ) : null}
          </div>
          {phrase?.map((card) => (
            <img
              className="dircard-braille-img"
              style={props.brailleStyle}
              src={card?.braille_img}
            />
          ))}
        </div>
      </div>
      <h4 style={props.dirTitle}>{props.category}</h4>
    </div>
  );
}

export default DirectoryCardPhrase;
