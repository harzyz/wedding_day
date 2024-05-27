import React from 'react'
import styles from './floatingCard.module.css'
import { MdNotListedLocation } from "react-icons/md";
import { TbClipboardHeart } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FloatingCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link className='link' to='/order-of-service'><TbClipboardHeart size={40} /></Link>
      <FaSackDollar />
      <MdNotListedLocation />
    </div>
  )
}

export default FloatingCard
