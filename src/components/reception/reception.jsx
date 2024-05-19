import React from "react";
import styles from "./reception.module.css";
// import { GiRose } from "react-icons/gi";
import blackrose from "../../assets/images/blackrose.png";

const Reception = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <div className={styles.blackrose}>
          <img src={blackrose} alt="" />
        </div>
        <h2>Joining Ceremony</h2>
        <p>Sat Mar 23 2024</p>
        <p>02:23 PM</p>
      </div>
      <div className={styles.right_side}>
        <div className={styles.blackrose}>
          <img src={blackrose} alt="" />
        </div>
        <h2>Reception</h2>
        <p>Sat Mar 23 2024</p>
        <p>02:23 PM</p>
      </div>
    </div>
  );
};

export default Reception;
