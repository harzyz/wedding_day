import React, { useState } from 'react'
import styles from './homePage.module.css'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import FloatingCard from '../../components/floatingCard/floatingCard'
import Reception from '../../components/reception/reception'
import WeddingNote from '../../components/weddingNote/weddingNote'
import AboutCouple from '../../components/aboutCouple/aboutCouple'
import MorePictures from '../../components/morePictures/morePictures'
import Modal from '../../components/modal/modal'

const HomePage = () => {
  const [groomModal, setGroomModal] = useState(false)
  const [brideModal, setBrideModal] = useState(false)
  const closeGroomModal = () =>{
    setGroomModal(false)
  }
  const closeBrideModal = () =>{
    setBrideModal(false)
  }
  return (
    <div>
      <Navbar />
      {/* <div className={styles.scrollwatcher}></div> */}
      <Hero />
      <Reception />
      <WeddingNote />
      {/* <FloatingCard /> */}
      <AboutCouple setGroomModal={setGroomModal} />
      <MorePictures />
      <Modal isOpen={groomModal} onClose={closeGroomModal}>
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
      </Modal>
      <Modal isOpen={brideModal} onClose={closeBrideModal}>
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
      </Modal>
    </div>
  )
}

export default HomePage
