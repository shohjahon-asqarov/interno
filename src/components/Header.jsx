import React from 'react'
import logo from '../../src/assets/icons/logo.svg'

const Header = () => {
  return (
   <div className="container  flex  justify-between items-center p-5">
    <div>
      <img src={logo} alt="logo" />
    </div>
    <div>
      <ul className='flex space-x-14 text-xl  ' >
        <li className='text-[#CDA274]'>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About Us</a>
        </li>

        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Pages</a>
        </li>

        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      </div>
   </div>
  )
}

export default Header
