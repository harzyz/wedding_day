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
      path: '/gifts'
    },
    {
      id: 3,
      icon: <MdNotListedLocation />,
      label: "Locate Church",
      path: "https://www.google.com/maps/place/Foursquare+Gospel+Church+Ijede/@6.5567112,3.4949583,12z/data=!4m10!1m2!2m1!1sFoursquare+gospel+church+ladegboye+Ikorodu+lagos!3m6!1s0x103be533108e5483:0x9ad4b1e3a0da05cf!8m2!3d6.5677356!4d3.5895923!15sCjBGb3Vyc3F1YXJlIGdvc3BlbCBjaHVyY2ggbGFkZWdib3llIElrb3JvZHUgbGFnb3MiA4gBAZIBFXJlbGlnaW91c19kZXN0aW5hdGlvbuABAA!16s%2Fg%2F11h_qrnvvr?entry=ttu"
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
