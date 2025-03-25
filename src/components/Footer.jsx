import logo from '../assets/icons/logo.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
const Footer = () => {
    return (
        <footer>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className='w-[350px] h-[374px]'>
                    <img src={logo} alt="" />
                    <p className='fontJost text-[22px] text-date-col mt-4 mb-2.5'>We are the leading architect and interior design firm in the world.</p>
                    <div className='flex items-center space-x-10'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="w-[210px] h-[374px] ml-8">
                    <p className='font-normal text-2xl text-dark mb-5'>Pages</p>
                    <div className="space-y-7.5">
                        <p className='fontJost text-[22px] text-date-col'>Style Guide </p>
                        <p className='fontJost text-[22px] text-date-col'>Protected</p>
                        <p className='fontJost text-[22px] text-date-col'>Licenses</p>
                        <p className='fontJost text-[22px] text-date-col'>Changelog</p>
                        <p className='fontJost text-[22px] text-date-col'>404</p>
                    </div>
                </div>
                <div className="w-[210px] h-[374px]">
                    <p className='font-normal text-2xl text-dark mb-5'>Explore</p>
                    <div className="space-y-7.5">
                        <p className='fontJost text-[22px] text-date-col'>About Us</p>
                        <p className='fontJost text-[22px] text-date-col'>Recent Blog</p>
                        <p className='fontJost text-[22px] text-date-col'>Pricing Plan</p>
                        <p className='fontJost text-[22px] text-date-col'>Our Projects</p>
                        <p className='fontJost text-[22px] text-date-col'>Contact Us</p>
                    </div>
                </div>
                <div className="w-[310px] h-[374px]">
                    <p className='font-normal text-2xl text-dark mb-5'>Contact</p>
                    <div className="space-y-7.5">
                        <p className='fontJost text-[22px] text-date-col'>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</p>
                        <p className='fontJost text-[22px] text-date-col'>contact@interno.com</p>
                        <p className='fontJost text-[22px] text-date-col'>(123) 456 - 7890</p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-line mt-20 mb-8.5'></div>
            <div className='text-center'>
                <p className='fontJost text-[22px] font-normal mb-8.5'>
                    Copyright © Interno | Designed by
                    <span className='text-btn2 px-2'>Victorflow</span>
                    Templates - Powered by
                    <span className='text-btn2 px-2'>Webflow</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer