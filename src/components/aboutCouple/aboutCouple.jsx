import React, { useState, useEffect } from "react";
import styles from "./aboutCouple.module.css";
// import Modal from '../modal/modal'
import ScrollAnimation from 'react-animate-on-scroll';


const AboutCouple = ({ setGroomModal, setBrideModal }) => {
  const [groom, setGroom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGroom(!groom);
    }, 30000);
  }, [groom]);


  return (
    <ScrollAnimation animateIn="fadeIn">
    <div className={styles.wrapper}>
      {!groom && (
        <div className={styles.inner_wrapper}>
          <div className={styles.couple_img}>
            <img
              src="https://i.pinimg.com/736x/52/ee/7e/52ee7e135d1b2402a0499d1666e1bf9a.jpg"
              alt=""
            />
          </div>
          <div className={styles.couple_story}>
            <h1>Groom</h1>
            <article>
              Pelumi has given you a detailed history but I would just start
              from when I developed an interest in her. It was the day I took
              her to get a bulb for her room and we got talking for a while
              because it was a long walk to and fro. For some reason that I
              can't remember, we spoke on a deep level that painted a picture of
              her values. I started to visit her ...
              <div className={styles.view_more} onClick={() => setGroomModal(true)}>View More</div>
            </article>
          </div>
        </div>
      )}

      {groom && (
        <div className={styles.inner_wrapper}>
          <div className={styles.couple_img}>
            <img
              src="https://www.bellanaijaweddings.com/wp-content/uploads/2022/06/Bare2Beauty-Bridal-Inspo.jpg"
              alt=""
            />
          </div>
          <div className={styles.couple_story}>
            <h1>Bride</h1>
            <article>
              Okay, let's quickly take a walk down memory lane. It was the year
              2018, I was posted to a village called Igbemo in Ekiti state for
              NYSC. And school/service was set to resume in January as the camp
              ended in December. Being that Igbemo is a village, all the corpers
              are usually familiar with one another and of course, old corp
              members try to make the new ones feel welcome. My first encounter
              with Peter was on one of those ....
              <div className={styles.view_more} onClick={() => setBrideModal(true)}>View More</div>
            </article>
          </div>
        </div>
      )}
      <div className={styles.scroll_guide}>
        <div
          onClick={() => setGroom(false)}
          className={!groom ? styles.scrolled : styles.scrolled2}></div>
        <div
          onClick={() => setGroom(true)}
          className={groom ? styles.scrolled : styles.scrolled2}></div>
      </div>
    </div>
    </ScrollAnimation>
  );
};

export default AboutCouple;
