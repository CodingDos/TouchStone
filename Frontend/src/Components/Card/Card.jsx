import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"

function Card({height, width, title, refimg, brailleimg, matched}) {  

  return (
    <div 
    className={`card ${matched ? 'matched' : ''}`}
    // className='card'
    style={{
      'width': width,
      'height': height
    }}
    >
      <h3 className='card-title'>{title}</h3>
      <img className="card-ref-img" src={refimg} />
      <img className="card-braille-img" src={brailleimg} /> 
    </div>
  )
}

export default Card