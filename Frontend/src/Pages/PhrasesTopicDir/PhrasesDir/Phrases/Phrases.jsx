import React, { useEffect, useState } from 'react';
import "./Phrases.css"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getPhrase } from "../../../../Services/characters.js"
import Navbar from '../../../../Components/Navbar/Navbar.jsx'
import FooterSearch from '../../../../Components/FooterSearch/FooterSearch.jsx'
import DirectoryCardPhrase from '../../../../Components/DirectoryCard/DirectoryCardPhrase.jsx';


function Phrases() {

  const { word } = useParams()
  const [ singlePhrase, setSinglePhrase ] = useState()
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getSinlgePhrase = async () => {
    try {
      setIsLoading(true)
      const info = await getPhrase(word)
      setSinglePhrase(info)
        
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    if (word) {
      getSinlgePhrase() 
    }
  }, [word])
  
  
  console.log("this is singlePhrase: ", singlePhrase)

  if (isLoading) {
    return (
      <div className='phrasesdir'>
        <Navbar />
        <div>Loading...</div> 
        <FooterSearch />
      </div>
    );
  }
  return (
    <div className='phrasesdir'>
      <Navbar />
      <div className="phrase-container">
        {singlePhrase ? (
          <div className='dircard'>
          <DirectoryCardPhrase 
          title={singlePhrase.phrase}
          img={singlePhrase.img}
          />
          </div>
        ) : (
          <div>No phrase data available.</div>
        )}
      </div>
      <FooterSearch />
    </div>
  )
}

export default Phrases