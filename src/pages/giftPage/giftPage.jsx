import React from "react";
import styles from "./giftPage.module.css";
import { FaGift, FaHome } from "react-icons/fa";
import GiftBubble from "../../components/GiftBubble";
import { Link } from "react-router-dom";
import PathBtn from "../../components/PathBtn";

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
    <div className="flex relative bg-[#fff] justify-center gap-[10px] lg:gap-[30px] flex-col items-center h-screen">
      <PathBtn locate="/" icon={<FaHome/>} />
      <GiftBubble />
      <div className="snowflakes" aria-hidden="true">
        <div className={styles.snowflake}>💰</div>
        <div className={styles.snowflake}>💷</div>
        <div className={styles.snowflake}>💰</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>💷</div>
        <div className={styles.snowflake}>💸</div>
        <div className={styles.snowflake}>🪙</div>
        <div className={styles.snowflake}>💰</div>
        <div className={styles.snowflake}>💷</div>
      </div>
      {azaS.map((item) => (
        <div className="p-6 w-[270px] bg-primary text-white rounded-[8px] shadow-lg animate-bubble">
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
    </div>
  );
};

export default GiftPage;
