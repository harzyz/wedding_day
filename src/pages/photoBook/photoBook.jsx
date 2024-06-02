import React from "react";
// import styles from "./photoBook.module.css";
import Carousel from "../../components/Carousel";
import picture1 from "../../assets/images/pic2.jpg";
import picture2 from "../../assets/images/pic3.jpg";
import picture3 from "../../assets/images/pic4.jpg";
import picture4 from "../../assets/images/pic5.jpg";
import picture5 from "../../assets/images/couple_pic.jpg";
import picture6 from "../../assets/images/couple_pic1.jpg";
import picture7 from "../../assets/images/pic6.jpg";
import picture8 from "../../assets/images/pic7.jpg";
import PathBtn from "../../components/PathBtn";
import { FaHome } from "react-icons/fa";

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
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic2.jpg?alt=media&token=cafc7cff-1a3c-4f38-bc89-06bc5d850aa2",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic3.jpg?alt=media&token=195c337e-03a1-49a2-a443-fde81c808e04",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic4.jpg?alt=media&token=78536680-6d06-47bf-a52a-48c9ff98f6a2",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic5.jpg?alt=media&token=ad7b54bd-7896-4e12-89da-a17035da2fb9",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic10.jpg?alt=media&token=e30c1084-d038-4d62-8f6f-aefd4cfc7aa9",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic9.jpg?alt=media&token=b8a7e901-9136-411c-98d6-5ecba65b6335",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic6.jpg?alt=media&token=6f2bfa6b-7dee-4b48-95d4-785cda0dd822",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic7.jpg?alt=media&token=6fc1288d-2bdc-4b45-a22f-618507b6b6af",
    "https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic8.jpg?alt=media&token=21defb8e-d01a-4756-b042-8dd48786152b"
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
      <img className="absolute z-[-2] top-0 left-0  w-full h-full placement object-cover" src="https://firebasestorage.googleapis.com/v0/b/sd2024pictures.appspot.com/o/pic2.jpg?alt=media&token=cafc7cff-1a3c-4f38-bc89-06bc5d850aa2" alt="" />
    </div>
  );
};

export default PhotoBook;
