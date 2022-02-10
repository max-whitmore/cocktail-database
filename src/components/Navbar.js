import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/' className='logo-section'>
        <img src='./logo.png' className='logo-img'></img>
        <h1 className='logo-text'>
          The Cocktail Database
          </h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
