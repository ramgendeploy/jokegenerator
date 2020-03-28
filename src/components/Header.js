import React from 'react'

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2 className="jokegen">Joke Generator</h2>
      <div className="menuLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

export default Header
