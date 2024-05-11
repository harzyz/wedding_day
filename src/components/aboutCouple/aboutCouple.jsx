import React, {useState, useEffect} from "react";
import styles from "./aboutCouple.module.css";
// import Modal from '../modal/modal'

const AboutCouple = ({setGroomModal, setBrideModal}) => {
  const [groom, setGroom] = useState(false)
  // const [groomModal, setGroomModal] = useState(false)
  // const [brideModal, setBrideModal] = useState(false)

  useEffect(()=> {
    setInterval(() => {
      setGroom(!groom)
    }, 10000);
  },[groom])

  // const LoveStory = [
  //   {
  //     id: 1,
  //     thubnail: '',
  //     couple: 'Groom',
  //     story: ''
  //   },
  //   {
  //     id: 2,
  //     thubnail: '',
  //     couple: 'Groom',
  //     story: ''
  //   },
  // ]
  // const closeGroomModal = () =>{
  //   setGroomModal(false)
  // }
  // const closeBrideModal = () =>{
  //   setBrideModal(false)
  // }

  return (
    <div className={styles.wrapper}>
      {!groom && <div className={styles.inner_wrapper}>
        <div className={styles.couple_img}>
          <img
            src="https://i.pinimg.com/736x/52/ee/7e/52ee7e135d1b2402a0499d1666e1bf9a.jpg"
            alt=""
          />
        </div>
        <div className={styles.couple_story}>
          <article>
            Pelumi has given you a detailed history but I would just start from
            when I developed an interest in her. It was the day I took her to
            get a bulb for her room and we got talking for a while because it
            was a long walk to and fro. For some reason that I can’t remember,
            we spoke on a deep level that painted a picture of her values. I
            started to visit her more often and the more I got to know her, the
            more impressed I was with her values, character, personality,
            spirituality etc. From there on, it went from admiring her absolute
            beauty( the girl too fine abeg)....
            <div onClick={()=> setGroomModal(true)}>View More</div>
          </article>
        </div>
      </div>}
      {/* <Modal isOpen={groomModal} onClose={closeGroomModal}>
          <div className={styles.modal_content}>
            <p>Pelumi has given you a detailed history but I would just start from
            when I developed an interest in her. It was the day I took her to
            get a bulb for her room and we got talking for a while because it
            was a long walk to and fro. For some reason that I can't remember,
            we spoke on a deep level that painted a picture of her values. I
            started to visit her more often and the more I got to know her, the
            more impressed I was with her values, character, personality,
            spirituality etc. From there on, it went from admiring her absolute
            beauty( the girl too fine abeg) to falling for an absolute beauty
            inside and outside. Everyone who knows me knows that I call her “My
            Fine Wine” which is a name I coined specially btw😉😀. It's been a
            privilege to do life with her so far as my best friend and I am
            grateful to God for the opportunity to take it to a much deeper
            level.</p>
          </div>
      </Modal> */}
      {groom && <div className={styles.inner_wrapper}>
        <div className={styles.couple_img}>
          <img
            src="https://www.bellanaijaweddings.com/wp-content/uploads/2022/06/Bare2Beauty-Bridal-Inspo.jpg"
            alt=""
          />
        </div>
        <div className={styles.couple_story}>
          <article>
            Pelumi has given you a detailed history but I would just start from
            when I developed an interest in her. It was the day I took her to
            get a bulb for her room and we got talking for a while because it
            was a long walk to and fro. For some reason that I can’t remember,
            we spoke on a deep level that painted a picture of her values. I
            started to visit her more often and the more I got to know her, the
            more impressed I was with her values, character, personality,
            spirituality etc. From there on, it went from admiring her absolute
            beauty( the girl too fine abeg)....
            <div onClick={()=> setGroomModal(true)}>View More</div>
          </article>
        </div>
      </div>}
      {/* <Modal isOpen={brideModal} onClose={closeBrideModal}>
          <div className={styles.modal_content}>
            <p>Pelumi has given you a detailed history but I would just start from
            when I developed an interest in her. It was the day I took her to
            get a bulb for her room and we got talking for a while because it
            was a long walk to and fro. For some reason that I can't remember,
            we spoke on a deep level that painted a picture of her values. I
            started to visit her more often and the more I got to know her, the
            more impressed I was with her values, character, personality,
            spirituality etc. From there on, it went from admiring her absolute
            beauty( the girl too fine abeg) to falling for an absolute beauty
            inside and outside. Everyone who knows me knows that I call her “My
            Fine Wine” which is a name I coined specially btw😉😀. It's been a
            privilege to do life with her so far as my best friend and I am
            grateful to God for the opportunity to take it to a much deeper
            level.</p>
          </div>
      </Modal> */}
    </div>
  );
};

export default AboutCouple;
