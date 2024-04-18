import React from 'react'
import { useState } from 'react'
import "./FooterSearch.css"

function FooterSearch() {

  const [search, setSearch] = useState("");

  function handleClick(){
    return 
  }

  return (
    <div className='footer'>
      <div className='footer-searchbar'>
        <input
        type='text'
        value={search}
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className='footer-searchbar-btn' onClick={handleClick}><i class="fa fa-search"></i></button>
      </div>
      
    </div>
  )
}

export default FooterSearch