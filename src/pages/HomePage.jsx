import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const HomePage = () => {
  return (
    <div className='relative'>
      {/* Navbar with absolute positioning to overlap banner */}
      <div className='absolute top-0 left-0 right-0 z-50'>
        <Navbar />
      </div>
      
      {/* Banner */}
      <Banner />
    </div>
  )
}

export default HomePage