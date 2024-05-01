import React from "react";
import { useState, useEffect } from "react";
import { getCharacter, getCombos, getAlphabet } from "../../Services/characters.js";
import "./DirectoryCard.css";

function DirectoryCardPhrase(props) {

	const [phrase, setPhrase] = useState();
	//const [comboArr, setCombos] = useState();
	//const [alphaArr, setAlpha] = useState();
	const [result, setResult] = useState();
	
	let comboArr = [];
	let alphaArr = [];

	const getBraille = () => {
		//console.log(comboArr);
		//console.log(alphaArr);
		const resultArr = [];
		const imgArr = [];
		console.log(phrase);
		const phraseArr = props.title.split('');
		setPhrase(phraseArr.join(''));
		console.log(phraseArr);
		for(let i = 0; i<phraseArr.length; i++) {
			let count = 0;
			let index = -1;
			let check = 0;
			console.log("test3");
			console.log(comboArr.length);
			for(let j = 0; j<comboArr.length; j++) {
				//console.log("test2");
				if(i+comboArr[j].english.length+1<=phraseArr.length){
					for(let l = 0; l<comboArr[j].english.length; l++){
						//console.log(phraseArr[i+l]);
						//console.log(comboArr[j].english[l]);
						if(phraseArr[i+l].toUpperCase()===comboArr[j].english[l]){
							console.log(comboArr[j].english[l]);
							check++;
						}
					}
					if(check===comboArr[j].english.length){
						resultArr.push(comboArr[j].binary);
						console.log(comboArr[j].binary);
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
		setResult(imgArr);
		return [resultArr, imgArr];
	}

	const getData1 = async () => {
		const test = await getCombos();
		//console.log(test);
		//setCombos(test);
		comboArr = test;
		console.log(comboArr);
		const test2 = await getAlphabet();
		//console.log(test2);
		//setAlpha(test2);
		alphaArr = test2;
		console.log(alphaArr);
		getBraille();
		console.log(result);
	}

	const getData2 = async () => {
		const test2 = await getAlphabet();
		//console.log(test2);
		//setAlpha(test2);
		alphaArr = test2;
		console.log(alphaArr);
	}

	useEffect(() => {
		setPhrase(props.title);
	  	getData1();
		//getData2();
	  	//getBraille();
		//console.log(result);
  	}, [props.title]);


	console.log("hi4");
	console.log(props.title);
	console.log(phrase);
	

  if (!props.title) {
    return <div>Loading...</div>; // Render loading state or null if title isn't available
  }

  return (
    <div>
      <div className="dircard-examples">
        <div className="dircard-example1">
          <h2 style={props.titleStyle}>{props.title}</h2>
          <div className="dircard-ref-img">
            {props.img ? <img src={props.img} alt="Descriptive text" /> : null}
          </div>
          {result?.map((card, index) => (
            <img
              className="dircard-braille-img"
              style={props.imgStyle}
              src={card}
            />
          ))}
        </div>
      </div>
      <h4 style={props.dirTitle}>{props.category}</h4>
    </div>
  );
}

export default DirectoryCardPhrase;
