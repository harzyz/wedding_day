import React from "react";
import styles from "./morePictures.module.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Pic1 from "../../assets/images/couple_pic.jpg"
import Pic2 from "../../assets/images/couple_pic1.jpg"



const MorePictures = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.img_wrapper}>
          <img
            src={Pic1}
            alt=""
          />
        </div>
        <div className={styles.img_wrapper}>
          <img
            src={Pic2}
            alt=""
          />
        </div>
      </div>
      <Link className="link" to='/photo-book'><button className={styles.photobook_btn}>See full photobook</button></Link>
    </div>
    </ScrollAnimation>
  );
};

export default MorePictures;
