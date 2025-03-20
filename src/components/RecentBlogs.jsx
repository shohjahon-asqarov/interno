import kitchenImg from '../assets/images/kitchenImg.png'
import livingRoomImg from '../assets/images/livingRoomImg.png'
import minimalistImg from '../assets/images/minimalistImg.png'
import kitchen2Img from '../assets/images/kitchen2Img.png'
import livingRoom2Img from '../assets/images/livingRoom2Img.png'
import minimalist2Img from '../assets/images/minimalist2Img.png'
import arrowRight from '../assets/icons/arrow-right.svg'
const RecentBlogs = () => {

    const blogs = [
        {
            id: 1,
            img: kitchenImg,
            type: 'Kitchen Design',
            title: 'Residential Interior Designer In New York, USA',
            date: 'November 23, 2021',
        },
        {
            id: 2,
            img: livingRoomImg,
            type: 'Living Room',
            title: 'How To Choose The Best Wall Art & Decor House?',
            date: 'November 23, 2021',
        },
        {
            id: 3,
            img: minimalistImg,
            type: 'Minimalist Interior',
            title: 'Tips To Increase The Interior Value Of Your House',
            date: 'November 23, 2021',
        },
        {
            id: 4,
            img: kitchen2Img,
            type: 'Kitchen Design',
            title: 'Best Solution For Any Office & Business Interior',
            date: 'November 23, 2021',
        },
        {
            id: 5,
            img: livingRoom2Img,
            type: 'Living Room',
            title: 'Get Solution For Building Construction Work',
            date: 'November 23, 2021',
        },
        {
            id: 6,
            img: minimalist2Img,
            type: 'Minimalist Interior',
            title: 'Attain The Best Finish For The Kitchen Cabinets',
            date: 'November 23, 2021',
        },
    ]

    return (
        <section>
            <div className="container">
                <h1 className='font-normal text-5xl text-center mb-5 mt-25'>Recent Blogs</h1>
                <p className='fontJost text-xl text-gray text-center mb-17.5'>Get updates about our latest trends and techniques used in <br />
                    interior design project works.</p>
            </div>
            <div className='container grid grid-cols-3 space-x-5 space-y-10'>
                {blogs.map((card) => (
                    <div key={card.id} className='border-1 border-b-col rounded-[62px] flex flex-col items-center w-96 h-129 mb-35'>
                        <div className='relative text-center'>
                            <img className='w-86 h-74 mt-5.5 mb-4' src={card.img} alt={card.title} />
                            <div className='text-date-col fontJost text-base bg-[#FFFFFF] absolute left-6 bottom-7 px-2.5 py-2.5 radius'>{card.type}</div>
                        </div>
                        <h2 className='w-83.5 font-normal text-[25px] text-dark mb-3'>{card.title}</h2>
                        <div className='flex items-center justify-between w-83.5'>
                            <p className='text-base fontJost text-date-col'>{card.date}</p>
                            <button className='rounded-full bg-btn px-5.5 py-4.5'>
                                <img src={arrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecentBlogs