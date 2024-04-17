import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Landing.css"

function Landing() {

  const navigate = useNavigate();  

  return (
    <div className='landing'>
      <img className="landing-img" src='src/assets/TSBeige.png'/>
      <h1>Touchstone</h1>
      <div className='landing-buttons'>
      <button onClick={() => navigate("/home")}>Enter</button>
      <button onClick={() => navigate("/devteam")}>About Us</button>
      <button onClick={() => navigate("/appinfo")}>Walk Through</button>
      </div>
    </div>
  )
}

export default Landing