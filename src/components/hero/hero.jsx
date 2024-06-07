import React from 'react'
import styles from './hero.module.css'
import { Link } from 'react-router-dom'
import coupleImage from "../../assets/images/pic-couple1.jpeg"

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <img src={coupleImage} alt="" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#00000080] gap-[20px] text-center">
        <h1 className='name_text'>Sharon & David</h1>
        <Link target="_blank" className="link" to='https://www.formpl.us/form/5324187836481536'><button className="bg-primary text-[#fff] w-[150px] h-[40px] rounded-[5px]">RSVP</button></Link>
      </div>
    </section>
  )
}

export default Hero
