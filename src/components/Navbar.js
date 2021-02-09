import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">
        Note App
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
