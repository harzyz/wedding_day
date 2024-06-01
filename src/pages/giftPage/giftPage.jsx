import React from "react";
import Carousel from "../../components/Carousel";
import picture1 from "../../assets/images/pic2.jpg";
import picture2 from "../../assets/images/pic3.jpg";
import picture3 from "../../assets/images/pic4.jpg";
import picture4 from "../../assets/images/pic5.jpg";
import picture5 from "../../assets/images/couple_pic.jpg";
import picture6 from "../../assets/images/couple_pic1.jpg";
import picture7 from "../../assets/images/pic6.jpg";
import picture8 from "../../assets/images/pic7.jpg";

const GiftPage = () => {
  const slides = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
  ];
  return (
    <div className="relative w-full bg-[#00000066] h-screen flex items-center justify-center">
      <div className="max-w-lg">
        <Carousel>
          {slides.map((s, index) => (
            <img key={index} src={s} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GiftPage;
