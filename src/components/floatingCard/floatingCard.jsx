import React from "react";
import styles from "./floatingCard.module.css";
import { MdNotListedLocation } from "react-icons/md";
import { TbClipboardHeart } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FloatingCard = () => {
  const flotingCardItems = [
    {
      id: 1,
      icon: <TbClipboardHeart size={40} />,
      label: "Order Of Service",
      path: "/order-of-service"
    },
    {
      id: 2,
      icon: <FaSackDollar />,
      label: "Cash Gifts",
    },
    {
      id: 3,
      icon: <MdNotListedLocation />,
      label: "Locate Church",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {flotingCardItems.map((item) => (
        <div key={item.id} className="flex w-[33%] items-center flex-col gap-[5px]">
          <Link className="link" to={item.path}>
            {item.icon}
          </Link>
          <p className="text-xs text-center">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingCard;
