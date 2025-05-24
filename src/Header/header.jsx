import React from 'react'
import { FiMenu } from 'react-icons/fi'
import Image from '../assets/Images/logo.png';
const header = () => {
  return (
    <div className="w-full flex justify-between items-center px-0 py-0  text-white">
    
      <div className="text-xl font-bold">
        <img src={Image} alt="Logo" className="h-10 w-auto" />
      
      </div>

     
      <div className="text-2xl cursor-pointer">
        <FiMenu />
      </div>
    </div>
  )
}

export default header