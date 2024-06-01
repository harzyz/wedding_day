import React from 'react'
import styles from './weddingNote.module.css'
import cheers from '../../assets/images/cheerss.png'
import rose from '../../assets/images/pngwing.com.png'
import ScrollAnimation from 'react-animate-on-scroll';


const WeddingNote = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <section className="w-full relative gap-[30px] h-[600px] bg-[#ee4ed1] flex flex-col items-center justify-center ">
      <div className={styles.cheers_img}>
        <img src={cheers} alt="" />
      </div>
      <h1 className='text-[16px] lg:text-[54px] text-center font-[600]'>
        My heart is yours to hold <br className='block'/> and cherish for the rest of our days.
      </h1>
      <div className={styles.roses}>
        <img src={rose} alt="" />
      </div>
      <div className={styles.roses2}>
        <img src={rose} alt="" />
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default WeddingNote;
