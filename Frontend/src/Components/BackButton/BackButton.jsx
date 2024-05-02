import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        const splitPath = location.pathname.split('/').filter(Boolean)
        splitPath.pop()
        const newPath = `/${splitPath.join('/')}`
        navigate(newPath)
    }

  return (
    <div className="root-back-button" onClick={goBack}>
        <IoMdArrowRoundBack />
    </div>
  )
}

export default BackButton