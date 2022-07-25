import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../imgs/planet.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <NavLink to='/Rockets'>Rockets</NavLink>
        <NavLink to='/Missions'>Missions</NavLink>
        <NavLink to='/'>My Profile</NavLink>
      </ul>
    </nav>

  )
};

export default Navbar;