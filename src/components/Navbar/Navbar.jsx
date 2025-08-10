import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <h2>Harsha's Portfolio</h2>
        <FaBars className='nav-mob-open' onClick={openMenu} />
      <ul ref={menuRef} className='nav-menu'>
        <FaTimes className='nav-mob-close' onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    </div>
  )
}

export default Navbar