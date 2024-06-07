import React from "react";
import styles from "./morePictures.module.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import firstPic from "../../assets/images/pic-couple9.jpeg"
import secondPic from "../../assets/images/pic-couple4.jpeg"


const MorePictures = () => {
  return (
    <div className="h-full lg:h-[700px] flex flex-col justify-center items-center gap-[30px] pt-[30px] pb-[80px] bg-[#fff] lg:py-50px">
      <div className="p-[15px] w-full flex flex-col justify-center gap-[30px] lg:flex-row">
        <div className="w-full h-full lg:w-[400px] lg:h-[400px]">
          <img
            className="w-full rounded-[8px] h-full"
            src={secondPic}
            alt="Ring Show off"
          />
        </div>
        <div className="w-full h-full lg:w-[400px] lg:h-[400px]">
          <img
            className="w-full rounded-[8px] h-full"
            src={firstPic}
            alt="Couple hugging"
          />
        </div>
      </div>
      <Link className="link" to='/photo-book'><button className={styles.photobook_btn}>See full photobook</button></Link>
    </div>
  );
};

export default MorePictures;
