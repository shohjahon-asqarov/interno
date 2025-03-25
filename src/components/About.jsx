import React from 'react'
import call from '../assets/icons/call.svg'
import kitchen from '../assets/images/kitchen.png'

const About = () => {
  return (
    <div>
      <div className='container py-20'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-10 '>
          <div className='md:w-1/2 space-y-10'>
            <h1 className='text-4xl'>We Tackle The Most <br /> Challenging Designs</h1>
            <p className='text-[#4D5053]'>
              The world needs innovators and problem solvers who <br /> turn challenges into greater opportunities. We have <br /> an insatiable curiosity about transformative trends <br /> challenging the status.
            </p>
            <div className='flex items-center space-x-5'>
              <img src={call} alt="" />
              <p className='text-[#4D5053] text-lg'>
                012345678 <br />
                Call Us Anytime
              </p>
            </div>
            <button className='bg-[#292F36] text-white rounded-xl w-48 h-12'>Get Free Estimate</button>
          </div>

          <div className=' mt-10 '>
            <img src={kitchen} alt="" className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
