import React, { useState } from "react";
import styles from "./orderOfService.module.css";
import { FaArrowRight } from "react-icons/fa";
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

const OrderOfService = () => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide((prev) => prev + 1)
  }
  const prevSlide = () => {
    setSlide((prev) => prev - 1)
  }

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
      hymn: 'Christ'
    },
    {
      id: 5,
      program: "Bible Reading",
    },
    {
      id: 6,
      program: "Congregational Hymn – O PERFECT LOVE",
      hymn: 'Christ'
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
    },
    {
      id: 16,
      program: "Photographs",
    },
  ];
  
  const ministers = [
    {
      id: 1,
      minister: 'Rev Emmanuel & Pastor Mrs. Olabisi Esseh'
    },
    {
      id: 2,
      minister: 'Rev Dr. Gabriel & Rev Mrs. Betty Aigbogu'
    },
    {
      id: 3,
      minister: 'Rev Dr. Dada Olu & Elder Kemi Shonibare'
    },
    {
      id: 4,
      minister: 'Bishop Gabriel Ayilara'
    },
    {
      id: 5,
      minister: 'Rev Isaac Awofiranye'
    },
  ]
  return (
    <div className={styles.wrapper}>
      {slide === 0 &&<div className={styles.contain}>
        <div className={styles.inner_contain}>
          <h1 className={styles.order}>Order Of Service</h1>

          <ol>
            {orderService.map((item) => (
              <li key={item.id}>{item.program}  {item.hymn && <button>Hymn</button>}</li>
            ))}
          </ol>
        </div>
      </div>}
      {slide === 1 && <div className={styles.contain}>
        <div className={styles.inner_contain}>
          <h1 className={styles.order}>OFFICIATING MINISTERS</h1>

          <ul>
            {ministers.map((item) => (
              <li key={item.id}>{item.minister}</li>
              
            ))}
          </ul>
        </div>
      </div>}
      {slide === 2 && <Exhortation/>}
      {slide === 3 && <Declaration/>}
      {slide === 4 && <Solemnization/>}
      {slide === 5 && <Convenant/>}
      {slide === 6 && <Blessings/>}
      {slide === 7 && <Giving/>}
      {slide === 8 && <Prayer/>}
      {slide === 9 && <Minister/>}
      {slide === 10 && <Presentation/>}
      <img
        src="https://t3.ftcdn.net/jpg/01/04/61/96/360_F_104619688_UP27I7cxkZKuNZn9GxCLCj0TztesAyMV.jpg"
        alt=""
      />
      {slide <= 9 &&<div onClick={nextSlide} className={styles.next}>
        <FaArrowRight />
      </div>}
      {slide !== 0  && <div onClick={prevSlide} className={styles.prev}>
        <FaArrowLeft />
      </div>}
    </div>
  );
};

export default OrderOfService;
