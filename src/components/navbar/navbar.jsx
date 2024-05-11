import React from 'react'
import styles from './navbar.module.css'
import emoji from '../../assets/images/loveEmoji.jpg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
      <div className={styles.emoji}>
        <img src={emoji} alt="" />
      </div>
    </nav>
  )
}

export default Navbar
