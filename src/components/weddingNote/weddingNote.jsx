import React from "react";
import styles from "./weddingNote.module.css";
import cheers from "../../assets/images/cheers.png";
// import rosemary from '../../assets/images/rosmary.png'

const WeddingNote = () => {
  return (
    <section className={styles.wrapper}>
      {/* <img src={rosemary} alt="" /> */}
      <div className={styles.cheers_img}>
        <img src={cheers} alt="" />
      </div>
      <h1>
        My heart is yours to hold and cherish for <br /> the rest of our days.
      </h1>
    </section>
  );
};

export default WeddingNote;
