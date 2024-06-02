import React from "react";
import styles from "./morePictures.module.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Pic1 from "../../assets/images/couple_pic.jpg"
import Pic2 from "../../assets/images/couple_pic1.jpg"



const MorePictures = () => {
  return (
    <div className="h-full lg:h-[700px] flex flex-col justify-center items-center gap-[30px] pt-[30px] pb-[80px] bg-[#fff] lg:py-50px">
      <div className="p-[15px] w-full flex flex-col justify-center gap-[30px] lg:flex-row">
        <div className="w-full h-full lg:w-[400px] lg:h-[400px]">
          <img
            className="w-full rounded-[8px] h-full"
            src="https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic10.jpg?alt=media&token=e30c1084-d038-4d62-8f6f-aefd4cfc7aa9"
            alt="Ring Show off"
          />
        </div>
        <div className="w-full h-full lg:w-[400px] lg:h-[400px]">
          <img
            className="w-full rounded-[8px] h-full"
            src="https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic9.jpg?alt=media&token=b8a7e901-9136-411c-98d6-5ecba65b6335"
            alt="Couple hugging"
          />
        </div>
      </div>
      <Link className="link" to='/photo-book'><button className={styles.photobook_btn}>See full photobook</button></Link>
    </div>
  );
};

export default MorePictures;
