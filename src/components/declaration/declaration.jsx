import React from 'react'
import styles from "../exhortation/exhortation.module.css";

const Declaration = () => {
  const paragraph = [
    {
      id: 1,
      para: "(Bride and Groom stand while congregation sits)",
    },
    {
      id: 2,
      para: "I require and charge you both as you will answer at the dreadful day of judgement when the secrets and motives of all hearts shall be disclosed that if either of you knows of any impediment why you may not be lawfully joined together in marriage, please confess it now, knowing for sure that if two persons are joined together otherwise than as God's word allows, their marriage is not lawful.",
    }
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>CHARGE AND DECLARATION</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Declaration
