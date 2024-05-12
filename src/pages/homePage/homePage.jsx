import React, { useState } from "react";
import styles from "./homePage.module.css";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import FloatingCard from "../../components/floatingCard/floatingCard";
import Reception from "../../components/reception/reception";
import WeddingNote from "../../components/weddingNote/weddingNote";
import AboutCouple from "../../components/aboutCouple/aboutCouple";
import MorePictures from "../../components/morePictures/morePictures";
import Modal from "../../components/modal/modal";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HomePage = () => {
  const [groomModal, setGroomModal] = useState(false);
  const [brideModal, setBrideModal] = useState(false);
  const closeGroomModal = () => {
    setGroomModal(false);
  };
  const closeBrideModal = () => {
    setBrideModal(false);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {/* <div className={styles.scrollwatcher}></div> */}
      <Hero />
      <Reception />
      <WeddingNote />
      <FloatingCard />
      <AboutCouple setGroomModal={setGroomModal} setBrideModal={setBrideModal} />
      <MorePictures />
      <Modal isOpen={groomModal} onClose={closeGroomModal}>
        <div className={styles.modal_content}>
          <div className={styles.close_icon}>
            <IoMdCloseCircleOutline onClick={closeGroomModal} />
          </div>
          <p>
            Pelumi has given you a detailed history but I would just start from
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
            level.
          </p>
        </div>
      </Modal>
      <Modal isOpen={brideModal} onClose={closeBrideModal}>
        <div className={styles.modal_content}>
          <div className={styles.close_icon}>
            <IoMdCloseCircleOutline onClick={closeBrideModal} />
          </div>
          <p>
            Okay, let’s quickly take a walk down memory lane. It was the year
            2018, I was posted to a village called Igbemo in Ekiti state for
            NYSC. And school/service was set to resume in January as the camp
            ended in December. Being that Igbemo is a village, all the corpers
            are usually familiar with one another and of course, old corp
            members try to make the new ones feel welcome. My first encounter
            with Peter was on one of those days. I was in the flat of a fellow
            new corper and he had these games that guys like to play so a lot of
            the guys were there playing. I think it was FIFA and that’s how they
            beat Peter in this game o😂😂😂. As he don lose game na, the next
            thing is to talk to woman. That was the first time we spoke and we
            had a decent and interesting conversation that I didn’t think much
            of after it ended. Fast forward to a few weeks later, (this was
            after we had interacted a couple more times at this point), he came
            to my place and said he remembered that I mentioned that I needed to
            get a bulb for my room as I had been ‘living’ in darkness and he
            wanted to take me to where I’ll get it. To say I was touched was an
            understatement, I was like ‘wow, that’s really thoughtful’. He
            wasn’t the first person to visit my place especially the old corpers
            but he was the first and only one to actually make a move to solve a
            problem so yea I was really touched. But no, that wasn’t where the
            love story started from at least not for me. Although looking back
            now, I can see that God was definitely working behind the scenes. A
            few more weeks after and he told me that he liked me and he would
            like us to be more than friends and I politely declined. We still
            stayed friends though, really good friends. I honestly can’t even
            pinpoint the time when the tides began to change, but all I know is
            we started talking about ‘us’. Praying about the relationship,
            talking about our feelings and what not. Fast forward to six years
            after, and here we are, getting ready to officially begin the start
            of our forever. And he’s still the kindest and most thoughtful soul
            I know. The best part, He’s all mine🤭!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
