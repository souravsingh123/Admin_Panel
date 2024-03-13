import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <NavLink to="">elearning</NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/course">Course</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar