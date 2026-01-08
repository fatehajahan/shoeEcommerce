import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Tranding from './components/Trending'
import PinkLead from './components/PinkLead'
import BestSelling from './components/BestSelling'
import Review from './components/Review'
import Footer from './components/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

const HomePage = () => {
  return (
    <div className='relative'>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
      <Review />
      <Footer />
    </div>
  )
}

export default HomePage