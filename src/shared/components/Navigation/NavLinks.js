import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
          <NavLink to="/" exact>Users</NavLink>
      </li>
      <li>
          <NavLink to="/u1/venues">My Venues</NavLink>
      </li>
      <li>
          <NavLink to="/venues/new">Add a Venue</NavLink>
      </li>
      <li>
          <NavLink to="/auth">Sign-in</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
