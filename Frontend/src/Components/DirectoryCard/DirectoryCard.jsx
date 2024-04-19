import React from "react";
import { useState, useEffect } from "react";
import "./DirectoryCard.css";
import { getCharacter } from "../../Services/characters.js";

function DirectoryCard(props) {

	const [img1, setImg1] = useState();
	const [img2, setImg2] = useState();
	const [img3, setImg3] = useState();

	useEffect(() => {
		console.log("running");
		const getImg1 = async () => {
			const test = await getCharacter(props.example1);
			console.log(test);
			setImg1(test);
		}
		getImg1();
	},[]);

	useEffect(() => {
		const getImg2 = async () => {
			const test = await getCharacter(props.example2);
			console.log(test)
			setImg2(test);
		}
		getImg2();
	},[]);

	useEffect(() => {
		const getImg3 = async () => {
			const test = await getCharacter(props.example3);
			console.log(test)
			setImg3(test);
		}
		getImg3();
	},[]);

  return (
    <div className="dircard">
      <div className="dircard-examples">
        <div className="dircard-example1">
          <h3>{props.example1}</h3>
          <img className="dircard-braille-img" src={img1?.braille_img} />
        </div>
        <div className="dircard-example2">
          <h3>{props.example2}</h3>
          <img className="dircard-braille-img" src={img2?.braille_img} />
        </div>
        <div className="dircard-example3">
          <h3>{props.example3}</h3>
          <img className="dircard-braille-img" src={img3?.braille_img} />
        </div>
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default DirectoryCard;
