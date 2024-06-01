import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Presentation = () => {
  const paragraph = [
    {
      id: 1,
      para: "Minister:",
    },
    {
      id: 2,
      para: "I have the privilege and honor to present the latest couple Mr. & Mrs. David Chibueze to you all, in the name of God the Father, and of the Son and of the Holy Spirit. Amen!",
    }
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>PRESENTATION OF THE NEW COUPLE</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Presentation
