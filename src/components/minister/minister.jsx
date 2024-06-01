import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Minister = () => {
  const paragraph = [
    {
      id: 1,
      para: "“These are no longer two but one. What therefore God has joined together, let no man put asunder. Those, whom God Almighty has joined together, let no custom, tradition, culture, law court, the couple themselves, situational ethics nor any other tendencies put asunder”.",
    },
    {
      id: 2,
      para: "I repeat, it is written and stands written in the Bible, the words of Jesus Christ, the Author and Prince of Peace: “Whatsoever therefore God has joined together, let no man put asunder”.",
    },
    {
      id: 3,
      para: "For as much as David Chibueze and Sharon Oluwafisayo have consented together in Holy wedlock and have witnessed the same before God and this congregation, and thereunto have given and pledged by covenant each to the other and have declared the same by giving of rings and joining of hands, I .......... pronounce and declare you as husband and wife, in the name of God the Father, and of the Son and of the Holy Spirit. Amen!",
    },
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>MINISTER'S DECLARATION OF THEIR NEW STATUS:</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Minister
