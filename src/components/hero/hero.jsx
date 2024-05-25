import React from 'react'
import styles from './hero.module.css'
import weddingPic from '../../assets/images/first_img.jpg'

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <img src={weddingPic} alt="" />
      <div className={styles.inner_wrapper}>
        <h1>Sharon & David</h1>
      </div>
    </section>
  )
}

export default Hero
