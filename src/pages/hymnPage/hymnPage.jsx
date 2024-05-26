import React from 'react'
import styles from "./hymnPage.module.css"
import InChristAlone from '../../components/inChristAlone/inChristAlone'
import OPerfectLove from '../../components/oPerfectLove/oPerfectLove'
import LeadUs from '../../components/leadUs/leadUs'

const HymnPage = () => {
  return (
    <div className={styles.wrapper}>
      {/* <InChristAlone /> */}
      {/* <OPerfectLove /> */}
      <LeadUs />
    </div>
  )
}

export default HymnPage
