import React from 'react'
import styles from './floatingCard.module.css'
import { MdNotListedLocation } from "react-icons/md";
import { GiOppositeHearts } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FloatingCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link className='link' to='/order-of-service'><GiOppositeHearts /></Link>
      <FaSackDollar />
      <MdNotListedLocation />
    </div>
  )
}

export default FloatingCard
