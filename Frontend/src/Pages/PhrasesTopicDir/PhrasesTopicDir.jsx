import React from 'react'
import "./PhrasesTopicDir.css"
import FooterSearch from '../../Components/FooterSearch/FooterSearch'
import Navbar from '../../Components/Navbar/Navbar'
import DirectoryCardPhrase from '../../Components/DirectoryCard/DirectoryCardPhrase'

function PhrasesTopicDir() {
  return (
    <div className='phrasesdir'>
      <Navbar/>
      <h1 className='directory-title'>Common Phrases</h1>
      <div className="phrase-container">
      <DirectoryCardPhrase
        title="Signs"
        />
      <DirectoryCardPhrase
        title="Directions"
        />
      <DirectoryCardPhrase
      title="Time"
      />
      </div>
      <FooterSearch/>
    </div>
  )
}

export default PhrasesTopicDir