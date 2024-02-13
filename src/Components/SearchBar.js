import React from 'react'
import './SearchBar.css'

export default function SearchBar({ searchParticipant, setSearchParticipant }) {
  function handleChange(e) {
    setSearchParticipant(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <div className="search">
        <div id="magnifying-glass"></div>
        <input type="search" onChange={handleChange} value = {searchParticipant} placeholder = "Search..."/>
      </div>
    </div>
  )
}
