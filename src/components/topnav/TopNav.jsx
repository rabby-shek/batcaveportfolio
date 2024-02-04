import React from 'react';
import LOGO from '../../assets/images/batman-logo.png';
import { NavLink } from 'react-router-dom';
import { FaHome , FaProjectDiagram } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillContacts } from "react-icons/ai";
const TopNav = () => {
  return (
    <section className='topnav-container'>
        <div className="logo">
            <NavLink to='/batcaveportfolio'><img src={LOGO} alt="logo" /></NavLink>
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <NavLink to="/batcaveportfolio" ><FaHome /></NavLink>
                </li>
                <li>
                    <NavLink to="/about"><IoPersonCircleSharp /></NavLink>
                </li>
                <li>
                    <NavLink to="/project"><FaProjectDiagram  /></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><AiFillContacts /></NavLink>
                </li>
            </ul>

        </div>
    </section>

  )
}

export default TopNav;
