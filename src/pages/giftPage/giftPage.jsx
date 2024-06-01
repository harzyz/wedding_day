import React from "react";
import styles from "./giftPage.module.css";
import { FaGift, FaHome } from "react-icons/fa";
import GiftBubble from "../../components/GiftBubble";
import { Link } from "react-router-dom";

const GiftPage = () => {
  const azaS = [
    {
      id: 1,
      aza: "3003206536",
      azaName: "David CHIBUEZE",
      azaBank: "UBA",
      azaType: "Dorm",
    },
    {
      id: 2,
      aza: "0211591075",
      azaName: "Sharon Akintade",
      azaBank: "UBA",
      azaType: "Naira",
    },
    {
      id: 3,
      aza: "3003206536",
      azaName: "David CHIBUEZE",
      azaBank: "UBA",
      azaType: "Dollar",
    },
  ];
  return (
    //   <div className="flex w-full justify-center items-center h-screen">
    //   <div className="relative p-4 bg-pink-500 rounded-full shadow-lg animate-bounce">
    //     <FaGift className="text-white text-6xl animate-spin-slow" />
    //     <div className="absolute top-0 right-0 bottom-0 left-0 m-auto w-6 h-6 bg-white rounded-full animate-ping"></div>
    //   </div>
    // </div>

    <div className="flex relative justify-center gap-[10px] lg:gap-[30px] flex-col items-center h-screen">
      <Link className="link" to="/">
        <div className="absolute bg-blue-500 h-[40px] w-[40px] flex items-center text-white justify-center space-around left-[15px] top-[15px]">
          <FaHome />
        </div>
      </Link>
      <GiftBubble />
      <div className="snowflakes" aria-hidden="true">
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
      </div>
      {/* <div className="p-6 bg-blue-500 text-white rounded-full shadow-lg animate-bubble">
        <p className="text-xl">3003206536 David CHIBUEZE UBA Dorm</p>
      </div> */}
      {azaS.map((item) => (
        <div className="p-6 w-[270px] bg-blue-500 text-white rounded-[15px] shadow-lg animate-bubble">
          <div className="text-xl flex flex-col items-center">
            <p className="text-3xl lg:text-5xl">{item.aza}</p>
            <p className="text-sm lg:text-[16px]">{item.azaName}</p>
            <p className="text-sm lg:text-[16px]">{item.azaBank + " Bank"}</p>
            <p className="text-sm lg:text-[16px]">
              {item.azaType + " Account"}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="p-6 bg-blue-500 text-white rounded-full shadow-lg animate-bubble">
        <p className="text-xl">3003206536
          David CHIBUEZE
          UBA
          Dollar Account</p>
      </div> */}
    </div>
  );
};

export default GiftPage;
