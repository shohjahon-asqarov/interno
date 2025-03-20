import React from 'react'
import right from '../assets/icons/arrow-right.svg'


const Design = () => {
  return (
    <div>
      <div className='container py-20 '>
        <ul className='grid grid-cols-3 text-center '>
            <li>
                <h3 className='mb-6 text-lg'>Interior Design</h3>
                <p className='text-[#4D5053]'>Enhancing the interior to achieve <br /> a healthier environment for the <br /> people using right space.</p>
                <div className='flex justify-center'>
                <button className='text-[#4D5053] flex gap-3 mt-10'>
                View More 
                <img src={right} alt="" />
                </button>
                </div>
            </li>

            <li>
                <h3 className='mb-6 text-lg'>Interior Design</h3>
                <p className='text-[#4D5053]'>Enhancing the interior to achieve <br /> a healthier environment for the <br /> people using right space.</p>
                <div className='flex justify-center'>
                <button className='text-[#4D5053] flex gap-3 mt-10'>
                View More 
                <img src={right} alt="" />
                </button>
                </div>
            </li>

            <li>
                <h3 className='mb-6 text-lg'>Interior Design</h3>
                <p className='text-[#4D5053]'>Enhancing the interior to achieve <br /> a healthier environment for the <br /> people using right space.</p>
                <div className='flex justify-center'>
                <button className='text-[#4D5053] flex gap-3 mt-10'>
                    View More 
                <img src={right} alt="" />
                </button>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Design
