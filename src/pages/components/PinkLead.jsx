import React from 'react'
import pinkBg from '../../assets/pinkLead.png'
import threeShoe from '../../assets/shoe3.png'

const PinkLead = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='relative'>
                    <img src={pinkBg} alt="" className='w-full rounded-lg' />

                    <div className='absolute top-[50%] right-4 sm:right-6 md:right-12 lg:right-16 -translate-y-1/2 max-w-[90%] sm:max-w-md md:max-w-lg'>
                        <h2 className='text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 font-poppins text-white w-full sm:w-[250px] md:w-[300px] lg:w-[350px]'>
                            Are you ready to lead the way
                        </h2>
                        <p className='text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 font-poppins text-white w-full sm:w-[280px] md:w-[350px] lg:w-[400px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rec.
                        </p>
                        <button className='bg-white text-[#fd8b92] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-transparent font-poppins font-bold cursor-pointer hover:text-white duration-500 transition text-sm sm:text-base'>
                            Explore
                        </button>

                        <img src={threeShoe} alt="" className='hidden md:hidden lg:block object-contain mt-4'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PinkLead