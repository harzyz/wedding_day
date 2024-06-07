import React from "react";
// import styles from "./photoBook.module.css";
import Carousel from "../../components/Carousel";
import PathBtn from "../../components/PathBtn";
import { FaHome } from "react-icons/fa";
import bgOthers from "../../assets/images/pic-couple8.jpeg"
import picture1 from "../../assets/images/pic-couple1.jpeg"
import picture2 from "../../assets/images/pic-couple7.jpeg"
import picture3 from "../../assets/images/pic-couple6.jpeg"
import picture4 from "../../assets/images/pic-couple9.jpeg"
import picture5 from "../../assets/images/pic-couple2.jpeg"
import picture6 from "../../assets/images/pic-couple3.jpeg"
import picture7 from "../../assets/images/pic-couple4.jpeg"
import picture8 from "../../assets/images/pic-couple5.jpeg"

const PhotoBook = () => {
  // const Column1 = [
  //   {
  //     id: 1,
  //     thumbnail:
  //       "https://drive.google.com/file/d/1PNeG3FO646dPQ3P2TD6kPyS0AJX4WJ-Y/view",
  //     styling: styles.img_wrapper,
  //   },
  //   {
  //     id: 2,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper2,
  //   },
  //   {
  //     id: 3,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper,
  //   },
  // ];
  // const Column2 = [
  //   {
  //     id: 1,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper2,
  //   },
  //   {
  //     id: 2,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper2,
  //   },
  //   {
  //     id: 3,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper2,
  //   },
  // ];
  // const Column3 = [
  //   {
  //     id: 1,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper,
  //   },
  //   {
  //     id: 2,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper2,
  //   },
  //   {
  //     id: 3,
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  //     styling: styles.img_wrapper,
  //   },
  // ];
  const slides = [
    bgOthers,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8
  ];
  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.photbook_column}>
    //     {Column1.map((item) => (
    //       <div key={item.id} className={item.styling}>
    //         <img src={item.thumbnail} alt="" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.photbook_column}>
    //     {Column2.map((item) => (
    //       <div key={item.id} className={item.styling}>
    //         <img src={item.thumbnail} alt="" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.photbook_column}>
    //     {Column3.map((item) => (
    //       <div key={item.id} className={item.styling}>
    //         <img src={item.thumbnail} alt="" />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="relative w-full bg-[#00000066] h-screen flex items-center justify-center">
      <PathBtn locate="/" icon={<FaHome />} />
      <div className="max-w-lg">
        <Carousel>
          {slides.map((s, index) => (
            <img key={index} src={s} alt="" />
          ))}
        </Carousel>
      </div>
      <div className="absolute w-full h-full z-[-1] bg-[#00000066] "></div>
      <img className="absolute z-[-2] top-0 left-0  w-full h-full placement object-cover" src={bgOthers} alt="" />
    </div>
  );
};

export default PhotoBook;
