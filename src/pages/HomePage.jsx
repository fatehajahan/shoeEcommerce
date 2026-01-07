import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Tranding from './components/Trending'
import PinkLead from './components/PinkLead'
import BestSelling from './components/BestSelling'

const HomePage = () => {
  return (
    <div className='relative'>
      {/* Navbar with absolute positioning to overlap banner */}
      <div className='absolute top-0 left-0 right-0 z-50'>
        <Navbar />
      </div>

      {/* Banner */}
      <Banner />
      <Tranding />
      <div className='md:block lg:block hidden'>
        <PinkLead />
      </div>
      <BestSelling />
    </div>
  )
}

export default HomePage