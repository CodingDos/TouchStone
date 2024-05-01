import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Landing.css"

function Landing() {

  const navigate = useNavigate();  

  return (
    <div className='landing'>
      <img className="landing-img" src='src/assets/logos/touchstone-logo.png'/>
      <h1 className='landing-title'>TouchStone</h1>
      <div className='landing-buttons'>
      <button className='landing-button-style' onClick={() => navigate("/home")}>Enter</button>
      <button className='landing-button-style'onClick={() => navigate("/devteam")}>About Us</button>
      <button className='landing-button-style'onClick={() => navigate("/appinfo")}>Walk Through</button>
      </div>
    </div>
  )
}

export default Landing