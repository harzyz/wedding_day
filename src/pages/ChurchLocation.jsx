import React from 'react'
import PathBtn from '../components/PathBtn'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ChurchLocation = () => {
  return (
    <div className='relative w-full h-screen p-[20px] lg:p-[50px] gap-[100px] flex flex-col items-center justify-center bg-[#fff]'>
      {/* <button className='bg-primary w-[80px]'></button> */}
      <PathBtn locate='/' icon={<FaHome />}/>
      <div className='text-center'>
          
        <p className='text-2xl font-[500]'>Venue: Foursquare Gospel Church,</p>
        <p className='text-xl'>Ladegboye Missionary Zonal Headquarters,</p>
        <p className='text-lg'>off ijede road, Ikorodu, Lagos</p>
      </div>
      <Link target='_blank' className='link' to="https://maps.app.goo.gl/QtcdqkauiNsDPTzz5">
        <button className='bg-primary px-[15px] h-[45px] text-[#fff] rounded-[8px] w-[250px]'>Church In Google Maps</button>
      </Link>
    </div>
  )
}

export default ChurchLocation
