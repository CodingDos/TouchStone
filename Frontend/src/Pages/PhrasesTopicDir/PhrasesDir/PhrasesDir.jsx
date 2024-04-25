import React from 'react'
import "./PhrasesDir.css"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import FooterSearch from '../../../Components/FooterSearch/FooterSearch.jsx'
import Navbar from '../../../Components/Navbar/Navbar'
import DirectoryCardPhrase from '../../../Components/DirectoryCard/DirectoryCardPhrase.jsx'
import { getSignPhrases, getTimePhrases, getDirectionPhrases } from '../../../Services/characters.js'



function PhrasesDir() {

  const { topic } = useParams()
  console.log("this is params for topic", topic)
  const navigate = useNavigate()
  const [phrases, setPhrases] = useState([])

  useEffect(() => {
    const getPhrases = async () => {
      let info
      switch(topic) {
        case 'Sgn':
          info = await getSignPhrases()
          break
        case 'Dir':
          info = await getDirectionPhrases()
          break
        case 'Tim':
          info = await getTimePhrases()
          break
        default:
          setPhrases([])
          return
      }
      setPhrases(info) 
    }
    getPhrases()
  }, [topic])
  
 
  return (
    <div className='phrasesdir'>
      <Navbar />
      <h1 onClick={() => navigate(`/phrases/`)}>Phrases</h1>
      <div className="phrase-container">
        {phrases.map((phrase, idx) => (
          <div className="dircard" onClick={() => navigate(`/phrases/${topic}/${phrase.phrase}`)}>
            <DirectoryCardPhrase 
            index={idx}
            title={phrase.phrase}
            />
          </div>
        ))}
      </div>
      <FooterSearch />
    </div>
  )
}

export default PhrasesDir