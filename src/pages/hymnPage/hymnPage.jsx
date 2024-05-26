import React from 'react'
import styles from "./hymnPage.module.css"
import InChristAlone from '../../components/inChristAlone/inChristAlone'
import OPerfectLove from '../../components/oPerfectLove/oPerfectLove'
import LeadUs from '../../components/leadUs/leadUs'
import { useParams } from 'react-router-dom'

const HymnPage = () => {
  const params = useParams()
  const hymns = [
    {
      id: 1,
      hymn: <InChristAlone />
    },
    {
      id: 2,
      hymn: <OPerfectLove />
    },
    {
      id: 3,
      hymn: <LeadUs />
    },
  ]

  const candidate = hymns.find((item) =>
    item.id === Number(params.id)
  );
  return (
    <div className={styles.wrapper}>
      {/* <InChristAlone /> */}
      {/* <OPerfectLove /> */}
      <LeadUs />
    </div>
  )
}

export default HymnPage
