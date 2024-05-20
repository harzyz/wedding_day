import React from 'react'
import styles from './weddingNote.module.css'
import cheers from '../../assets/images/cheerss.png'
import rosemary from '../../assets/images/pngwing.com.png'
import ScrollAnimation from 'react-animate-on-scroll';


const WeddingNote = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <section className={styles.wrapper}>
      <div className={styles.roses}>
        <img src={rosemary} alt="" />
      </div>
      <div className={styles.roses2}>
        <img src={rosemary} alt="" />
      </div>
      <div className={styles.cheers_img}>
        <img src={cheers} alt="" />
      </div>
      <h1>My heart is yours to hold and cherish for <br/> the rest of our days.</h1>
    </section>
    </ScrollAnimation>
  )
}

export default WeddingNote
