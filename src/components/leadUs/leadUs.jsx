import React from 'react'
import styles from './leadUs.module.css'

const LeadUs = () => {
    const orderService = [
        {
          id: 1,
            program: "",
          hymn: " Lead us, heavenly Father, lead us o'er the world's tempestuous sea; guard us, guide us, keep us, feed us, for we have no help but thee; yet possessing every blessing, if our God our Father be.",
        },
        {
          id: 2,
          program: "",
          hymn: "Saviour, breathe forgiveness o'er us: all our weakness thou dost know; thou didst tread this earth before us, thou didst feel its keenest woe; lone and dreary, faint and weary, through the desert thou didst go.",
        },
        {
          id: 3,
          program: "",
          hymn: "Spirit of our God, descending, fill our hearts with heavenly joy, love with every passion blending, pleasure that can never cloy thus provided, pardoned, guided, nothing can our peace destroy.",
        },
      ];
      return (
        <div className={styles.inner_contain}>
          <div className={styles.text_wrap}>
            <div className={styles.inner_text}>
              <h1 className={styles.order}>RECESSIONAL HYMN- LEAD US HEAVENLY FATHER, LEAD US</h1>
    
              <ol>
                {orderService.map((item) => (
                  <li key={item.id}>
                    {item.program}
                    <p className={styles.hymn_wrapper}>{item.hymn}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <img
            src="https://source.boomplaymusic.com/group10/M00/03/03/d65249d107e944c1a35cfa634d5d0673_464_464.JPG"
            alt=""
          />
        </div>
      );
}

export default LeadUs
