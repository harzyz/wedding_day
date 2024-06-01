import React from "react";
import styles from "./morePictures.module.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Pic1 from "../../assets/images/couple_pic.jpg"
import Pic2 from "../../assets/images/couple_pic1.jpg"



const MorePictures = () => {
  return (
    <div className={styles.wrapper}>
      <div className="p-[10px] w-full flex flex-col justify-center gap-[30px] lg:flex-row">
        <div className="w-full lg:w-[400px] h-[400px]">
          <img
            className="w-full h-full"
            src={Pic1}
            alt="Couple hugging"
          />
        </div>
        <div className="w-full lg:w-[400px] h-[400px]">
          <img
            className="w-full h-full"
            src={Pic2}
            alt="Ring Show off"
          />
        </div>
      </div>
      <Link className="link" to='/photo-book'><button className={styles.photobook_btn}>See full photobook</button></Link>
    </div>
  );
};

export default MorePictures;
