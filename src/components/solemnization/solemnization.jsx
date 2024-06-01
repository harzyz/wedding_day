import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Solemnization = () => {
  const paragraph = [
    {
      id: 1,
      para: "(The Bride and Groom shall stand, and the minister shall ask)",
    },
    {
      id: 2,
      para: "The Minister shall ask the Groom:",
    },
    {
      id: 3,
      para: "Minister: David Chibueze, will you have Sharon Oluwafisayo as your wedded wife, to live together after God's ordinance in the holy estate of marriage? Will you love honor and keep her and forsaking all others, keeping only to her as long as you both shall live?",
    },
    {
      id: 4,
      para: "Groom's Response: I will, God helping me.",
    },
    {
      id: 5,
      para: "The minister says to the bride,",
    },
    {
      id: 6,
      para: "Minister: Sharon Oluwafisayo, will you have David Chibueze as your wedded husband, to live together after God's ordinance in the holy estate of marriage? Will you love him, comfort him, honor, obey and keep him and forsaking all others, keeping only to him as long as you both shall live?",
    },
    {
      id: 7,
      para: "Bride's Response: I will by the grace of God.",
    },
    {
      id: 8,
      para: "Minister: Who giveth this woman to be married to this man?",
    },
    {
      id: 9,
      para: "The Father of the Bride comes forward to give the right hand of the lady to the minister.",
    },
    {
      id: 10,
      para: "The minister receiving the bride from her fathers hand shall cause the Groom with right hand to take the woman by her right hand.",
    },
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>SOLEMNIZATION OF MARRIAGE</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solemnization
