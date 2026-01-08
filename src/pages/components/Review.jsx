import React from 'react'
import rev1 from '../../assets/reviewImg.jpg'
import rev2 from '../../assets/reviewImg2.jpg'
import { FaStar } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Review = () => {

    const reviews = [
        {
            id: 1,
            name: 'Ava Joshi',
            image: rev1,
            rating: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            name: 'Liam Carter',
            image: rev2,
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            name: 'Sophia Khan',
            image: rev1,
            rating: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]

    return (
        <div className='container pb-[253px]'>
            {/* Header */}
            <div className="header">
                <div className='flex items-center justify-center gap-x-[15px] md:gap-x-[30px]'>

                    <div className='h-[3px] w-[30px] md:w-[50px] bg-black'></div>

                    <h2 className='font-poppins text-[28px] md:text-[36px] lg:text-[45px] font-medium text-center'>
                        Customer Review
                    </h2>

                    <div className='h-[3px] w-[30px] md:w-[50px] bg-black'></div>

                </div>
            </div>

            {/* Review Swiper */}
            <div className='reviewSwiper pt-[50px] md:pt-[80px] lg:pt-[100px] flex justify-center'>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1} // default (mobile)
                    breakpoints={{
                        768: {
                            slidesPerView: 1, // tablet
                        },
                        1024: {
                            slidesPerView: 2, // desktop
                        },
                    }}
                    className="w-full "
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className='bg-[#DEDEDE] rounded-2xl 
                              py-[40px] px-[20px] 
                              sm:py-[50px] sm:px-[30px] 
                              md:py-[60px] md:px-[40px] 
                              lg:py-[78px] lg:px-[60px]'>

                                <div className='flex flex-col sm:flex-row items-center gap-y-[25px] sm:gap-x-[40px]'>

                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className='w-[90px] sm:w-[110px] md:w-[120px] lg:w-[132px] rounded-2xl'
                                    />

                                    <div className='text-center sm:text-left'>
                                        <h2 className='font-poppins text-[20px] sm:text-[24px] lg:text-[28px] font-semibold'>
                                            {review.name}
                                        </h2>

                                        {/* Stars */}
                                        <div className='flex justify-center sm:justify-start items-center gap-x-[5px] my-2'>
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} size={18} className='text-[#FFB800]' />
                                            ))}
                                        </div>

                                        <p className='font-poppins text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed'>
                                            {review.text}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default Review
