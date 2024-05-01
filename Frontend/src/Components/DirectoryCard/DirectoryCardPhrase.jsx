import React from "react";
import { useState, useEffect } from "react";
import { getCharacter, getCombos, getAlphabet } from "../../Services/characters.js";
import "./DirectoryCard.css";


function DirectoryCardPhrase(props) {

	const [phrase, setPhrase] = useState();
	const [comboArr, setCombos] = useState();
	const [alphaArr, setAlpha] = useState();

	const getBraille = () => {
		console.log(combosArr);
		console.log(alphaArr);
		const resultArr = [];
		const imgArr = [];
		for(let i = 0; i<phraseArr.length; i++) {
		let count = 0;
		let index = -1;
		let check = 0;
			for(let j = 0; j<comboArr.length; j++) {
				if(i+comboArr[j].english.length+1<=phraseArr.length){
					for(let l = 0; l<comboArr[j].english.length; l++){
						if(phraseArr[i+l]===comboArr[j].english[l]){
							check++;
						}
					}
					if(check===comboArr[j].english.length){
						resultArr.push(comboArr[j].binary);
						imgArr.push(comboArr[j].braille_img);
						i = i + comboArr[j].english.length-1;
						break;
					}
				check = 0;
				}
			}
			for(let y = 0; y<alphaArr.length; y++) {
				if(check>0){
					break;
				}
				if(phraseArr[i].toUpperCase()===alphaArr[y].english[0]){
					resultArr.push(alphaArr[y].binary);
					imgArr.push(alphaArr[y].braille_img);
					break;
				}
			}
			console.log(resultArr);
		}
		console.log("hi");
		return superResultArr[resultArr, imgArr];
	}

	const getData1 = async () => {
		const test = await getCombos();
		setCombos(test);
	}

	const getData2 = async () => {
		const test2 = await getAlphabet();
		setAlpha(test2);
	}

	useEffect(() => {
		console.log("hi3");
	  	getData();
	  	setPhrase(getBraille());
	  	console.log("hi2");
  	}, []);


	console.log("hi4");
	console.log(phrase);
	


  	return (
  		<div >
      			<div className="dircard-examples">
        			<div className="dircard-example1">
          				<h3>{props.title}</h3>
					{phrase[1]?.map((card) => (
						<img className="dircard-braille-img" src={card?.braille_img} />
					))}
				</div>
      			</div>
      			<h4>{props.category}</h4>
    		</div>
	);
}

export default DirectoryCardPhrase;
