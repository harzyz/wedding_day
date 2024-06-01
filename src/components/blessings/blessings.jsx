import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Blessings = () => {
  const paragraph = [
    {
      id: 1,
      para: "The minister receiving the Bible and the rings shall bless them saying:",
    },
    {
      id: 2,
      para: "“Bless O Lord, this Bible and these rings, which we sanctify in your name and grant that those who shall read the Bible and wear the rings may keep true faith unto You and unto each other, and that they may abide in your peace all the days of their lives, through Jesus Christ our Lord. Amen!",
    }
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>BLESSING OF THE BIBLE AND RINGS</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blessings
