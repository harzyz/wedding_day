import React from "react";
import styles from "./morePictures.module.css";
import { Link } from "react-router-dom";


const MorePictures = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.img_wrapper}>
          <img
            src="https://images.unsplash.com/photo-1613281512736-55bd4a24f0a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.img_wrapper}>
          <img
            src="https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <Link to='/photo-book'><button className={styles.photobook_btn}>See full photobook</button></Link>
    </div>
  );
};

export default MorePictures;
