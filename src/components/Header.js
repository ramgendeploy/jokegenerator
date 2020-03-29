import React from 'react'

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2 className="jokegen">Joke Generator</h2>
      <div className="menuLinks">
        <Link to="/jokegenerator">Home</Link>
        <Link to="/jokegenerator/about">About</Link>
      </div>
    </header>
  )
}

export default Header
