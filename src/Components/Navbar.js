import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../imgs/planet.png'
import './style/Navbar.css'

const Navbar = () => {

  const navLinkStyle = ({ isActive }) => {
    return { textDecoration: isActive ? 'underline' : 'none' }
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Space Travelers' Hub</h1>
        </div>
        <ul>
          <NavLink style={navLinkStyle} to='/Rockets'>Rockets</NavLink>
          <NavLink style={navLinkStyle} to='/Missions' >Missions</NavLink>
          <NavLink style={navLinkStyle} to='/'>My Profile</NavLink>
        </ul>
      </div>
    </nav>

  )
};

export default Navbar;