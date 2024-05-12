import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.wrapper}>
      <h3>Happy Married LIfe</h3>
      <div>&copy;<span>{currentYear}</span></div>
    </div>
  )
}

export default Footer
