import React from "react";
import styles from "./inChristAlone.module.css";
import PathBtn from "../PathBtn";

const InChristAlone = () => {
  const orderService = [
    {
      id: 1,
      program: "In Christ alone my hope is found;",
      hymn: " He is my light, my strength, my song;This cornerstone, this solid ground,Firm through the fiercest drought and storm. What heights of love, what depths of peace, When fears are stilled, when strivings cease! My comforter, my all in all — Here in the love of Christ I stand.",
    },
    {
      id: 2,
      program: "In Christ alone, who took on flesh,",
      hymn: " Fullness of God in helpless babe! This gift of love and righteousness, Scorned by the ones He came to save. Till on that cross as Jesus died, The wrath of God was satisfied; For ev'ry sin on Him was laid Here in the death of Christ I live.",
    },
    {
      id: 3,
      program: "There in the ground His body lay,",
      hymn: " Light of the world by darkness slain; Then bursting forth in glorious day, Up from the grave He rose again! And as He stands in victory, Sin's curse has lost its grip on me; For I am His and He is mine Bought with the precious blood of Christ.",
    },
    {
      id: 4,
      program: "No guilt in life, no fear in death",
      hymn: " This is the pow'r of Christ in me; From life's first cry to final breath, Jesus commands my destiny. No pow'r of hell, no scheme of man, Can ever pluck me from His hand; Till He returns or calls me home Here in the pow'r of Christ I'll stand.”",
    },
  ];
  return (
    <div className={styles.inner_contain}>
      
      <div className={styles.text_wrap}>
        <div className={styles.inner_text}>
          <h1 className={styles.order}>PROCESSIONAL HYMN - IN CHRIST ALONE</h1>

          <ol>
            {orderService.map((item) => (
              <li key={item.id}>
                {item.program}
                <p className={styles.hymn_wrapper}>{item.hymn}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <img
        src="https://worshipwallpapers.com/wp-content/uploads/2016/11/inchristalone-ig.jpg"
        alt=""
      />
    </div>
  );
};

export default InChristAlone;
