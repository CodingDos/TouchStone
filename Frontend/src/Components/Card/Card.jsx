import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"

function Card({height, width}) {

  const navigate = useNavigate();
  

  return (
    <div 
    className='card'onClick={() => navigate("/alphabet")}
    style={{
      'width': width,
      'height': height
    }}
    >
      <h3 className='card-title'>Aa</h3>
      <img className="card-ref-img" src="src/assets/refs/A.png" />
      <img className="card-braille-img" src="src/assets/braille/braille_a_100000.png" /> 
    </div>
  )
}

export default Card