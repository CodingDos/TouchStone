import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./PhrasesTopicDir.css"
import FooterSearch from '../../Components/FooterSearch/FooterSearch'
import Navbar from '../../Components/Navbar/Navbar'
import DirectoryCardPhrase from '../../Components/DirectoryCard/DirectoryCardPhrase'

function PhrasesTopicDir() {

  const navigate = useNavigate()

  return (
    <div className='phrasesdir'>
      <Navbar/>
      <h1 className='directory-title'>Common Phrases</h1>
      <div className="phrase-container">
      <div className="dircard" onClick={() => navigate("/phrases/Sgn")}>
      <DirectoryCardPhrase
        title="Signs"
        />
        </div>
        <div className="dircard" onClick={() => navigate("/phrases/Dir")}>
      <DirectoryCardPhrase
        title="Directions"
        />
        </div>
        <div className="dircard" onClick={() => navigate("/phrases/Tim")}>
      <DirectoryCardPhrase
      title="Time"
      />
      </div>
      </div>
      <FooterSearch/>
    </div>
  )
}

export default PhrasesTopicDir