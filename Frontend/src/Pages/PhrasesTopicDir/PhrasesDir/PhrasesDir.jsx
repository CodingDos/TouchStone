import React from 'react'
import "./PhrasesDir.css"
import { useNavigate } from 'react-router-dom'
import FooterSearch from '../../../Components/FooterSearch/FooterSearch.jsx'
import Navbar from '../../../Components/Navbar/Navbar'
import DirectoryCardPhrase from '../../../Components/DirectoryCard/DirectoryCardPhrase.jsx'





function PhrasesDir() {

  const navigate = useNavigate()
 
  return (
    <div className='phrasesdir'>
      <Navbar />
      <h1>Phrases</h1>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Women"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Men"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Exit"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Room"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Floor"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Stairs"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Elevator"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Level"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Office"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Restroom"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Entrance"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Accessible"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Lobby"
      />
      </div>
      <div className="dircard" onClick={() => navigate("/phrases/Sgn/exit")}>
      <DirectoryCardPhrase
      title="Stop"
      />
      </div>
      <FooterSearch />
    </div>
  )
}

export default PhrasesDir