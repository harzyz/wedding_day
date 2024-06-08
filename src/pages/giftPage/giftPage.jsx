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
      azaType: "Dorm & Dollar",
    },
    {
      id: 2,
      aza: "0211591075",
      azaName: "Sharon Akintade",
      azaBank: "UBA",
      azaType: "Naira",
    },
  ];

  const gifts = [
    {
      id: 1,
      gift: "Home Appliances ",
    },
    {
      id: 2,
      gift: "Freezer",
    },
    {
      id: 3,
      gift: "Air Conditioner ",
    },
    {
      id: 4,
      gift: "Airfryer",
    },
    {
      id: 5,
      gift: "Washing machine",
    },
    {
      id: 6,
      gift: "Fan",
    },
    {
      id: 7,
      gift: "Non-stick pots",
    },
    {
      id: 8,
      gift: "Set of silicon cooking materials",
    },
  ];
  return (
    <div className=" relative bg-[#fff] pt-[50px] h-screen">
      <div className="flex h-full pt-[20px] overflow-y-scroll pb-[50px] gap-[10px] lg:gap-[30px] flex-col items-center">
        <PathBtn locate="/" icon={<FaHome />} />
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
          <div
            key={item.id}
            className="p-6 w-[270px] lg:w-[350px] bg-primary text-white rounded-[8px] shadow-lg animate-bubble"
          >
            <div className="flex flex-col items-center">
              <p className="text-3xl lg:text-5xl">{item.aza}</p>
              <p className="text-sm lg:text-[16px]">{item.azaName}</p>
              <p className="text-sm lg:text-[16px]">{item.azaBank + " Bank"}</p>
              <p className="text-sm lg:text-[16px]">
                {item.azaType + " Account"}
              </p>
            </div>
          </div>
        ))}
        <p className="text-3xl font-bold">WishList</p>
        {gifts.map((item) => (
          <div
            key={item.id}
            className="p-6 w-[270px] lg:w-[350px] bg-primary text-white rounded-[8px] shadow-lg animate-bubble"
          >
            <div className="flex flex-col items-center">
              <p className="text-xl text-center lg:text-[16px]">{item.gift}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftPage;
