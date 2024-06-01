import React, { useState } from "react";
import styles from "./orderOfService.module.css";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Exhortation from "../../components/exhortation/exhortation";
import Declaration from "../../components/declaration/declaration";
import Solemnization from "../../components/solemnization/solemnization";
import Convenant from "../../components/convenant/convenant";
import Blessings from "../../components/blessings/blessings";
import Giving from "../../components/giving/giving";
import Prayer from "../../components/prayer/prayer";
import Minister from "../../components/minister/minister";
import Presentation from "../../components/presentation/presentation";
import Modal from "../../components/modal/modal";
import InChristAlone from "../../components/inChristAlone/inChristAlone";
import { Link } from "react-router-dom";
import emoji from "../../assets/images/sharonDavid.jpeg";
import blueRose from "../../assets/images/blue_rose.png";
import PathBtn from "../../components/PathBtn";

const OrderOfService = () => {
  const [slide, setSlide] = useState(0);
  const [hymn1, setHymn1] = useState(false);

  const nextSlide = () => {
    setSlide((prev) => prev + 1);
  };
  const prevSlide = () => {
    setSlide((prev) => prev - 1);
  };
  const closeBrideModal = () => {
    setHymn1(false);
  };

  const orderService = [
    {
      id: 1,
      program: "Bridal March",
    },
    {
      id: 2,
      program: "Opening Prayer",
    },
    {
      id: 3,
      program: "Praise and Worship",
    },
    {
      id: 4,
      program: "Processional Hymn – IN CHRIST ALONE",
      hymn: "/hymns/1",
    },
    {
      id: 5,
      program: "Bible Reading",
    },
    {
      id: 6,
      program: "Congregational Hymn – O PERFECT LOVE",
      hymn: "/hymns/2",
    },
    {
      id: 7,
      program: "Exhortation, Charge and Declaration",
    },
    {
      id: 8,
      program: "Solemnization of Marriage /Prayers for the Couples",
    },
    {
      id: 9,
      program: "Choir Ministration",
    },
    {
      id: 10,
      program: "Message",
    },
    {
      id: 11,
      program: "Blessing The Couple",
    },
    {
      id: 12,
      program: "Thanksgiving",
    },
    {
      id: 13,
      program: "Announcement",
    },
    {
      id: 14,
      program: "Closing Prayer/Benediction",
    },
    {
      id: 15,
      program: "Recessional Hymn – LEAD US HEAVENLY FATHER, LEAD US",
      hymn: "/hymns/3",
    },
    {
      id: 16,
      program: "Photographs",
    },
  ];

  const ministers = [
    {
      id: 1,
      minister: "Rev Emmanuel & Pastor Mrs. Olabisi Esseh",
    },
    {
      id: 2,
      minister: "Rev Dr. Gabriel & Rev Mrs. Betty Aigbogu",
    },
    {
      id: 3,
      minister: "Rev Dr. Dada Olu & Elder Kemi Shonibare",
    },
    {
      id: 4,
      minister: "Bishop Gabriel Ayilara",
    },
    {
      id: 5,
      minister: "Rev Isaac Awofiranye",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {slide === 0 && (
        <div className={styles.contain}>
          <div className={styles.inner_contain}>
            
            <h1 className={styles.order}>Order Of Service</h1>

            <div className={styles.order_list}>
              {orderService.map((item) => (
                <div key={item.id}>
                  {!item.hymn && item.program}
                  {item.hymn && (
                    <Link to={item.hymn}>
                      <button className={styles.hymn_btn}>
                        {item.program}
                      </button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {slide === 1 && (
        <div className={styles.contain}>
          {/* <h1 className={styles.official}>SUSAN & DANIEL</h1> */}
          <div className={styles.inner_contain}>
            {/* <div className={styles.emoji}>
              <img src={emoji} alt="" />
            </div> */}
            <h1 className={styles.order}>OFFICIATING MINISTERS</h1>

            <ul>
              {ministers.map((item) => (
                <li key={item.id}>{item.minister}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {slide === 2 && <Exhortation />}
      {slide === 3 && <Declaration />}
      {slide === 4 && <Solemnization />}
      {slide === 5 && <Convenant />}
      {slide === 6 && <Blessings />}
      {slide === 7 && <Giving />}
      {slide === 8 && <Prayer />}
      {slide === 9 && <Minister />}
      {slide === 10 && <Presentation />}
      <img
        className={styles.back_feel}
        src="https://i.pinimg.com/564x/e0/63/99/e063990de780a9ff9145311f70ca4628.jpg"
        alt=""
      />
      <div className={styles.hanging_rose}>
        <img src={blueRose} alt="" />
      </div>
      <div className={styles.hanging_rose1}>
        <img src={blueRose} alt="" />
      </div>
      {slide <= 9 && (
        <div onClick={nextSlide} className={styles.next}>
          <FaArrowRight />
        </div>
      )}
      {slide !== 0 && (
        <div onClick={prevSlide} className={styles.prev}>
          <FaArrowLeft />
        </div>
      )}

      <PathBtn locate="/" icon={<FaHome />} />

      <Modal isOpen={hymn1} onClose={closeBrideModal}>
        <div className={styles.modal_content}>
          <InChristAlone />
        </div>
      </Modal>
    </div>
  );
};

export default OrderOfService;
