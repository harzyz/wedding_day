import React from 'react'
import styles from "./hymnPage.module.css"
import InChristAlone from '../../components/inChristAlone/inChristAlone'
import OPerfectLove from '../../components/oPerfectLove/oPerfectLove'
import LeadUs from '../../components/leadUs/leadUs'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import PathBtn from '../../components/PathBtn'

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

  const hymn = hymns.find((item) =>
    item.id === Number(params.id)
  );
  return (
    <div className={styles.wrapper}>
      {hymn.hymn}
      <div className={styles.go_back}>
        {/* <Link style={{color: 'inherit'}} to="/order-of-service">
         <FaArrowLeft />
        </Link> */}
        <PathBtn locate='/order-of-service' icon={<FaArrowLeft />} />
      </div>
      {/* <InChristAlone /> */}
      {/* <OPerfectLove /> */}
      {/* <LeadUs /> */}
    </div>
  )
}

export default HymnPage
