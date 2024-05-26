import React from 'react'
import styles from './navbar.module.css'
import emoji from '../../assets/images/sharonDavid.jpeg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <span>Sharon and David</span>
    </nav>
  )
}

export default Navbar
