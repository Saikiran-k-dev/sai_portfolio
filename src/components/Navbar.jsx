import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import styles from "../css/navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <nav role="navigation">
  <div className={styles.menuToggle}>
   
    <input type="checkbox" id="menuCheckbox" />
    
   
    <span></span>
    <span></span>
    <span></span>
   
    <ul className={styles.menu}>
     
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
       
        <NavLink to="/about">About</NavLink>
      </li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
   
    </ul>
  </div>
</nav>
<Outlet />
    </div>
  )
}

export default Navbar
