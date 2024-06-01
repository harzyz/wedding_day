import React from 'react'
import styles from '../exhortation/exhortation.module.css'

const Convenant = () => {
  const paragraph = [
    {
      id: 1,
      para: "The minister shall join the right hand of the Bride to the right hand of the Groom, and the Groom shall say: I, David Chibueze do take you Sharon Oluwafisayo to be my wedded wife, to have and to hold from this day forward, to love and to cherish in all circumstances, till death do us part and thereto I give you my promise.",
    },
    {
      id: 2,
      para: "Likewise, the Bride, taking the Groom by the right hand shall say:",
    },
    {
      id: 3,
      para: "I, Sharon Oluwafisayo do take you, David Chibueze to be my wedded husband, to have and to hold from this day forward, to love and to cherish in all circumstances, till death do us part and thereto I give you my promise.",
    },
  ];
  return (
    <div className={styles.contain}>
      <div className={styles.inner_contain}>
        <h1 className={styles.order}>JOINING AND BLESSING (THE MARRIAGE COVENANT)</h1>

        <div>
          {paragraph.map((item) => (
            <p key={item.id}>{item.para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Convenant
