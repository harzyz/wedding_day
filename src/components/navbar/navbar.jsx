import React from 'react'
import styles from './navbar.module.css'
import emoji from '../../assets/images/loveEmo.jpg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <b>Janet and Johnbosco</b>
    </nav>
  )
}

export default Navbar
