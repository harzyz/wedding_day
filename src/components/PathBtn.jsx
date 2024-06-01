import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PathBtn = ({icon, locate= ""}) => {
  return (
    <Link className="link" to={locate}>
        <div className="absolute bg-primary rounded-full h-[40px] w-[40px] flex items-center text-white justify-center space-around left-[15px] top-[15px]">
          {icon}
        </div>
      </Link>
  )
}

export default PathBtn
