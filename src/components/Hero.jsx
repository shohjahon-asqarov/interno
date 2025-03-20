import React from 'react'
import room from '../../src/assets/images/room.png'



const Hero = () => {
  return (
   <div className='room'>
     <div className='container' >
     <div>
      <h1 className='text-6xl space-y-2'>
      Let's Create Your <br /> Dream Interior
      </h1>
      <p>
      The world needs innovators and problem solvers who turn <br />
      challenges into greater opportunities.
      </p>
      <button className='bg-[#292F36] p-3 h-12 w-48 text-center   rounded-xl flex gap-3 mt-10 text-white'>
                    Get Started
                </button>
     </div>
    </div>
   </div>
  )
}

export default Hero
