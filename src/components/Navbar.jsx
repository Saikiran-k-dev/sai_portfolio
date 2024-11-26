import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import styles from "../css/navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <div className={styles.container}>
            <h3 className={styles.name}>Saikiran K</h3>
            <ul className={styles.navi}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
