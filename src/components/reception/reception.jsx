import React from "react";
import styles from "./reception.module.css";
// import { GiRose } from "react-icons/gi";
import blackrose from "../../assets/images/blackrose.png";
import ScrollAnimation from 'react-animate-on-scroll';

const Reception = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <div className="p-[10px] lg:p-[50px] h-full lg:h-[400px] w-full flex flex-col lg:flex-row gap-[50px]">
      <div className="lg:w-[50%] h-[300px] lg:h-full flex flex-col lg:border-r border-[#cbc7c7] gap-[20px] justify-center items-center">
        <div className={styles.blackrose}>
          <img src={blackrose} alt="" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold">Church Service</h2>
        <p>Sat June 8 2024</p>
        <p>11 AM</p>
      </div>
      <div className="lg:w-[50%] h-[300px] lg:h-full border-t border-[#cbc7c7] lg:border-none flex flex-col gap-[20px] justify-center items-center">
        <div className={styles.blackrose}>
          <img src={blackrose} alt="" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold">Reception</h2>
        <p>Sat June 8 2024</p>
        <p>3 PM</p>
      </div>
    </div>
    </ScrollAnimation>
  );
};

export default Reception;
