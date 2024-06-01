import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Prayer = () => {
  const paragraph = [
    {
      id: 1,
      para: "The couple on their knees, the minister leads in prayer:",
    },
    {
      id: 2,
      para: "“O Eternal God, Creator and preserver of all mankind, giver of all spiritual grace , the Author of everlasting life, send Thy blessings upon these Thy children, this man David Chibueze and this woman Sharon Oluwafisayo whom we bless in Thy name and grant that living faithfully together, they may perform and keep the vow and covenant made between them, whereof these rings given and received are a token and pledge and that they may ever remain in perfect love and peace together and live according to Thy laws, through Jesus Christ our Lord. Amen!",
    }
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>PRAYER</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Prayer
