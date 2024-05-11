import React from 'react'
import styles from './floatingCard.module.css'
import { MdNotListedLocation } from "react-icons/md";
import { GiOppositeHearts } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";

const FloatingCard = () => {
  return (
    <div className={styles.wrapper}>
      <GiOppositeHearts />
      <FaSackDollar />
      <MdNotListedLocation />
    </div>
  )
}

export default FloatingCard
