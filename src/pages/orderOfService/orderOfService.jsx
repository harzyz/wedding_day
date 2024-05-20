import React from "react";
import styles from "./orderOfService.module.css";

const OrderOfService = () => {
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
    },
    {
      id: 5,
      program: "Bible Reading",
    },
    {
      id: 6,
      program: "Congregational Hymn – O PERFECT LOVE",
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <div className={styles.inner_contain}>
          <h1 className={styles.order}>Order Of Service</h1>

          <ol>
            {orderService.map((item) => (
              <li key={item.id}>{item.program}</li>
            ))}
          </ol>
        </div>
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/01/04/61/96/360_F_104619688_UP27I7cxkZKuNZn9GxCLCj0TztesAyMV.jpg"
        alt=""
      />
    </div>
  );
};

export default OrderOfService;
