import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import emoji from '../../assets/images/sd-logo.png'

const Navbar = () => {
  const [color, setColor] = useState(false)


const changeColor = () => {
  if (window.scrollY >= 310){
    setColor(true)
  }else {
    setColor(false)
  }
  
}


  useEffect(() => {
  
    window.addEventListener('scroll', changeColor)
  }, []);


  return (
    <nav className={`fixed top-0 w-full h-[70px] ${color ? "bg-[#fff]" : "bg-[transparent]"} z-20 items-center justify-between flex px-[20px] lg:px-[80px] `}>
      <div className={styles.navbarItem}>
        <div className={styles.emoji}>
          <img src={emoji} alt="" />
        </div>
        <span className='text-[12px] lg:text-[20px] font-[500]'>Sharon and David</span>
      </div>
      <a href="https://www.formpl.us/form/5324187836481536"><button className={styles.photobook_btn}>RSVP</button></a>
    </nav>
  )
}

export default Navbar
