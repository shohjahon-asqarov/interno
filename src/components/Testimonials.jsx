import React from 'react'
import lisa from '../assets/images/lisa.svg'
import david from '../assets/images/david.svg'
import liza from '../assets/images/liza.svg'

const Testimonials = () => {
    return (
        <section className='my-[140px]'>
            <div className='container bag-color rounded-[70px] py-[103px]'>
                <div className='w-[479px] text-center text-4xl m-auto text-[#292F36]'>
                    <h1 className=''>What the People Thinks</h1>
                    <h2>About Interno</h2>
                </div>
                <div className='flex space-x-4 justify-center py-[45px]'>
                    <div className='bag-white w-[356px] rounded-4xl'>
                        <div className='pad px-[35px] flex items-center space-x-5'>
                            <img src={lisa} alt="" />
                            <div >
                                <h1 className='font-medium text-2xl text-[#292F36]'>Lisa Clairton</h1>
                                <p className='jost'>New York, USA</p>
                            </div>

                        </div>
                        <p className='padd w-[282px] jost'>We selected Interno interior because of rigorous design background & education.</p>
                    </div>

                    <div className='bag-white w-[356px] rounded-4xl'>
                        <div className='pad px-[35px] flex items-center space-x-5'>
                            <img src={david} alt="" />
                            <div >
                                <h1 className='font-medium text-2xl text-[#292F36]'>David Knight</h1>
                                <p className='jost'>Sydney, Australia</p>
                            </div>

                        </div>
                        <p className='padd w-[300px] jost'>The team exceeded our expectations and emerged as leaders of our project’s.</p>
                    </div>

                    <div className='bag-white w-[356px] rounded-4xl'>
                        <div className='pad px-[35px] flex items-center space-x-5'>
                            <img src={liza} alt="" />
                            <div >
                                <h1 className='font-medium text-2xl text-[#292F36]'>Lisa Clairton</h1>
                                <p className='jost'>Paris, France</p>
                            </div>

                        </div>
                        <p className='padd w-[310px] jost'>They balanced the architectural vision and the project realities beautifully.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
