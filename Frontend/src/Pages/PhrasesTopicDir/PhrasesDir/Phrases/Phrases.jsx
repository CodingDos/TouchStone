import React, { useEffect, useState } from 'react';
import "./Phrases.css"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getPhrase } from "../../../../Services/characters.js"
import Navbar from '../../../../Components/Navbar/Navbar.jsx'
import FooterSearch from '../../../../Components/FooterSearch/FooterSearch.jsx'
import DirectoryCardPhrase from '../../../../Components/DirectoryCard/DirectoryCardPhrase.jsx'

function Phrases() {

  const { word } = useParams()
  const [ singlePhrase, setSinglePhrase ] = useState()


  useEffect(() => {
    const getSinlgePhrase = async () => {
    try {
        const info = await getPhrase(word)
        console.log("THIS IS INFO", info)
        setSinglePhrase(info)
        
        console.log("this is singlePhrase: ", singlePhrase)
        
      } catch (error) {
        console.error(error)
      }
    }
    if(word) {
      getSinlgePhrase() 
    }
  }, [word])

  useEffect(() => {
    setSinglePhrase({ phrase: 'Test', category: 'Sgn', img: '' });
  }, []);
  
  


  return (
    <div>
      <Navbar />
      <div>
        <DirectoryCardPhrase
        title={singlePhrase?.phrase}
        />
      </div>
      <FooterSearch />
    </div>
  )
}

export default Phrases