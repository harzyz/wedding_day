import React from 'react'
import styles from './footer.module.css'
import ScrollAnimation from 'react-animate-on-scroll';


const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <ScrollAnimation animateIn='fadeIn'>
    <div className="w-full h-[300px] text-center uppercase flex flex-col justify-between bg-[#fff]">
      <h3 className='font-bold text-[20px]'>Happy Married LIfe🎉🎉🎉</h3>
      <div>&copy;<span>{currentYear}</span></div>
    </div>
    </ScrollAnimation>
  )
}

export default Footer
