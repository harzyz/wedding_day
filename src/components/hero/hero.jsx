import React from 'react'
import styles from './hero.module.css'
import weddingPic from '../../assets/images/first_img.jpg'

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <img src={weddingPic} alt="" />
      <div className={styles.inner_wrapper}>
        <h1>Journey with us to begin our <br/> forever ever after.</h1>
      </div>
    </section>
  )
}

export default Hero
