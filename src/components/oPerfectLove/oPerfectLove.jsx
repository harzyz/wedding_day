import React from "react";
import styles from "./oPerfectLove.module.css";

const OPerfectLove = () => {
  const orderService = [
    {
      id: 1,
        program: "",
      hymn: " O perfect Love, all human thought transcending,lowly we kneel in prayer before thy throne,that theirs may be the love which knows no ending,whom thou in sacred vow dost join in one.",
    },
    {
      id: 2,
      program: "",
      hymn: "O perfect Life, be thou their full assuranceof tender charity and steadfast faith, of patient hope and quiet, brave endurance,with childlike trust that fears no pain or death.",
    },
    {
      id: 3,
      program: "",
      hymn: "Grant them the joy which brightens earthly sorrow; grant them the peace which calms all earthly strife; grant them the vision of the glorious morrow that will reveal eternal love and life.",
    },
  ];
  return (
    <div className={styles.inner_contain}>
      <div className={styles.text_wrap}>
        <div className={styles.inner_text}>
          <h1 className={styles.order}>CONGREGATIONAL HYMN - O PERFECT LOVE</h1>

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
        src="https://i.scdn.co/image/ab67616d0000b27379702098308561c2a52bfa63"
        alt=""
      />
    </div>
  );
};

export default OPerfectLove;
