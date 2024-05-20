import React from 'react'
import styles from './footer.module.css'
import ScrollAnimation from 'react-animate-on-scroll';


const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <ScrollAnimation animateIn='fadeIn'>
    <div className={styles.wrapper}>
      <h3>Happy Married LIfe</h3>
      <div>&copy;<span>{currentYear}</span></div>
    </div>
    </ScrollAnimation>
  )
}

export default Footer
