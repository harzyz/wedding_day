import React from "react";
import styles from "./photoBook.module.css";

const PhotoBook = () => {
  const Column1 = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper,
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper2,
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper,
    },
  ];
  const Column2 = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper2,
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper2,
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper2,
    },
  ];
  const Column3 = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper,
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper2,
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      styling: styles.img_wrapper,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.photbook_column}>
        {Column1.map((item) => (
          <div key={item.id} className={item.styling}>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.photbook_column}>
        {Column2.map((item) => (
          <div key={item.id} className={item.styling}>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.photbook_column}>
        {Column3.map((item) => (
          <div key={item.id} className={item.styling}>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBook;
