import React from "react";
import { FaGift } from "react-icons/fa";

const GiftBubble = () => {
  return (
    <div className="">
      <div className="relative p-4 bg-pink-500 rounded-full shadow-lg animate-bounce">
        <FaGift className="text-white text-6xl animate-spin-slow" />
        <div className="absolute top-0 right-0 bottom-0 left-0 m-auto w-6 h-6 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default GiftBubble;
