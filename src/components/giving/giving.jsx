import React from 'react'
import styles from './giving.module.css'

const Giving = () => {
  const paragraph = [
    {
      id: 1,
      para: "The minister receiving the Bible and the rings shall bless them saying:",
    },
    {
      id: 2,
      para: "“With this Bible, I wed you, with my body I honor you and all my worldly goods with you I share from this day forth, in the name of God the Father, and of the Son and of the Holy Spirit, Amen”.",
    },
    {
      id: 3,
      para: "The minister delivers one of the rings to the groom to put on the fourth finger of the woman's left hand and the man holding the ring shall say after the minister:",
    },
    {
      id: 4,
      para: "This ring I give you as an identity of our wedding that the world may know that you are mine and I am yours, in the name of God the Father, and of the Son and of the Holy Spirit, Amen.",
    },
    {
      id: 5,
      para: "The minister then delivers the Bible and the other ring to the woman and the woman holding the Bible and ring, then shall repeat the above.",
    },
    {
      id: 6,
      para: "Then the Minister shall say:",
    },
    {
      id: 7,
      para: "“He who has begun this good work in you will perform and perfect it to the end.” Amen!",
    },
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>GIVING AND RECEIVING OF THE BIBLE AND RINGS</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Giving
