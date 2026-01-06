import React from 'react'
import bannerShoe from '../../assets/bannerShoe.png'

const Banner = () => {
    return (
        <div className='relative w-full overflow-hidden'>
            {/* Full-width background on the right - responsive */}
            <div className='absolute top-0 right-0 w-full md:w-1/2 h-full md:h-[1123px] bg-[#f7f7f7] shadow-[inset_100px_0_50px_-10px_rgba(0,0,0,0.08)] -z-10'></div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row md:items-center gap-y-8 md:gap-x-12 lg:gap-x-[157px] py-8 md:py-0'>
                    {/* Heading Section */}
                    <div className='w-full md:w-auto pt-8 md:pt-0'>
                        <h1 className='font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[98px] w-full md:w-[400px] lg:w-[487px] leading-[112%] font-semibold'>
                            Find Your Sole Mate With Us
                        </h1>
                    </div>

                    {/* Image Section */}
                    <div className='w-full md:w-auto h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] xl:h-[1123px] flex items-center justify-center relative'>
                        {/* ULTIMATE text - hidden on mobile, visible on larger screens */}
                        <p className='hidden lg:block capitalize -rotate-90 absolute right-[100px] xl:right-[168px] text-xl font-bold text-white text-[120px] xl:text-[180px]'>
                            ULTIMATE
                        </p>

                        {/* Shoe Image */}
                        <img 
                            src={bannerShoe} 
                            alt="Trendy Slick Pro Shoe" 
                            className='z-50 object-contain w-full h-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-full' 
                        />

                        {/* Price Section */}
                        <div className='absolute bottom-4 sm:bottom-8 md:top-[600px] lg:top-[750px] xl:top-[820px] left-1/2 -translate-x-1/2 text-center z-50'>
                            <p className='font-poppins text-sm sm:text-base md:text-lg font-semibold'>Trendy Slick Pro</p>
                            <p className='font-poppins text-lg sm:text-xl md:text-2xl font-bold mt-1'>₹ 3999.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner