import React from 'react'
import styles from './reception.module.css'
import { GiRose } from "react-icons/gi";

const Reception = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <GiRose size={50} />
        <h2>Joining Ceremony</h2>
        <p>Sat Mar 23 2024</p>
        <p>02:23 PM</p>
      </div>
      <div className={styles.right_side}>
        <GiRose size={50} />
        <h2>Reception</h2>
        <p>Sat Mar 23 2024</p>
        <p>02:23 PM</p>
      </div>
    </div>
  )
}

export default Reception
