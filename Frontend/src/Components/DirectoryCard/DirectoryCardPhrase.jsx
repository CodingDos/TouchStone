import React from 'react'
import { useState, useEffect } from 'react';
import { getCharacter } from '../../Services/characters.js';
import './DirectoryCard.css'

function DirectoryCardPhrase(props) {
    const [img1, setImg1] = useState();
	const [img2, setImg2] = useState();
	const [img3, setImg3] = useState();
    const [img4, setImg4] = useState();

    useEffect(() => {
		const getImg1 = async () => {
			const test = await getCharacter('Hh');
			setImg1(test);
		}
		getImg1();
	},[]);

    useEffect(() => {
		const getImg2 = async () => {
			const test = await getCharacter('Ee');
			setImg2(test);
		}
		getImg2();
	},[]);

    useEffect(() => {
		const getImg3 = async () => {
			const test = await getCharacter('Ll');
			setImg3(test);
		}
		getImg3();
	},[]);

    useEffect(() => {
		const getImg4 = async () => {
			const test = await getCharacter('Oo');
			setImg4(test);
		}
		getImg4();
	},[]);


  return (
    <div className="dircard">
    <div className="dircard-examples">
      <div className="dircard-example1">
        <h3>Hello</h3>
        <img className="dircard-braille-img" src={img1?.braille_img} />
        <img className="dircard-braille-img" src={img2?.braille_img} />
        <img className="dircard-braille-img" src={img3?.braille_img} />
        <img className="dircard-braille-img" src={img3?.braille_img} />
        <img className="dircard-braille-img" src={img4?.braille_img} />
      </div>
    </div>
    <h4>Common Phrases</h4>
  </div>
  )
}

export default DirectoryCardPhrase