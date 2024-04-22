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

  useEffect(() => {
    const phrase = props.title.toUpperCase();
    const searchPhrase = doubleIt(phrase);
    const searchArray = searchPhrase.match(/.{2}/g);
    async function processWord(searchArray) {
      const promise = searchArray.map((code) => getCharacter(code));
      const imgArr = await Promise.all(promise);
      setPhrase(imgArr);
    }
	processWord(searchArray)
  }, [props.title]);


  return (
    <div >
      <div className="dircard-examples">
        <div className="dircard-example1">
          <h3>{props.title}</h3>
			{phrase?.map((card) => (
				<img className="dircard-braille-img" src={card?.braille_img} />
			))}
</div>
      </div>
      <h4>{props.category}</h4>
    </div>
  );
}

export default DirectoryCardPhrase;
