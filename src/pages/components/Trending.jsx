import React from 'react'
import shoe1 from '../../assets/shoe1.png'
import shoe2 from '../../assets/shoe2.png'
import { ShoppingCart } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Trending = () => {
  const products = [
    { id: 1, name: 'Running sport shoe', price: 599, image: shoe1 },
    { id: 2, name: 'Running sport shoe', price: 39, image: shoe2 },
    { id: 3, name: 'Running sport shoe', price: 4999, image: shoe1 },
    { id: 4, name: 'Running sport shoe', price: 50, image: shoe2 },
  ]

  return (
    <div className='container mx-auto px-4 py-12 md:py-[150px]'>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>

        {/* Left Section */}
        <div className='w-full lg:w-[35%] lg:block flex flex-col md:text-left items-center justify-center text-center'>
          <div className='flex items-center gap-4'>
            <span className='w-8 h-[3px] bg-black md:block hidden'></span>
            <p className='text-xl font-poppins font-medium'>Our Trending</p>
          </div>

          <h2 className='text-3xl md:text-[45px] font-poppins font-medium leading-tight mt-3'>
            Most Popular Products
          </h2>

          <p className='text-gray-600 mt-3 w-[200px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className='bg-black w-[200px] text-white font-poppins font-semibold py-[17px] mt-[17px] cursor-pointer hover:bg-transparent hover:text-black duration-700 transition'>Explore</button>
        </div>

        {/* Right Section - Swiper */}
        <div className='trending-swiper w-full lg:w-[65%]'>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition'>

                  <div className='bg-gray-100 rounded-xl h-52 flex items-center justify-center mb-4'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='h-full object-contain -rotate-12'
                    />
                  </div>

                  <div className='flex justify-between items-center'>
                    <div>
                      <h3 className='font-poppins font-medium'>
                        {product.name}
                      </h3>
                      <p className='font-bold text-lg'>
                        ₹ {product.price.toFixed(2)}
                      </p>
                    </div>

                    <button className='bg-black text-white p-3 rounded-full hover:bg-gray-800 cursor-pointer'>
                      <ShoppingCart size={18} />
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Trending
