import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className='fixed w-full font-poppins'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-6 md:py-8 lg:pt-[66px]'>
                    {/* Logo */}
                    <a href="/" className='z-50'>
                        <div className='text-2xl font-bold cursor-pointer'>LOGO</div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-x-8 xl:gap-x-[59px] text-sm xl:text-base font-medium'>
                            <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200'>Home</li>
                            <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200'>Shop</li>
                            <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200'>Collection</li>
                            <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200'>Customize</li>
                        </ul>
                    </div>

                    {/* Icons */}
                    <div className='flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8 xl:gap-x-[49px] text-2xl xl:text-[27px]'>
                        <CiSearch className='cursor-pointer hover:text-gray-600 transition-colors duration-200 hidden sm:block'/>
                        <CiShoppingCart className='cursor-pointer hover:text-gray-600 transition-colors duration-200'/>
                        <button 
                            onClick={toggleMobileMenu}
                            className='lg:hidden cursor-pointer hover:text-gray-600 transition-colors duration-200 z-50'
                            aria-label='Toggle menu'
                        >
                            {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
                        </button>
                        <BiMenuAltRight className='cursor-pointer hover:text-gray-600 transition-colors duration-200 hidden lg:block'/>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='pt-24 px-8'>
                    <ul className='flex flex-col gap-y-6 text-base font-medium'>
                        <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100'>
                            Home
                        </li>
                        <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100'>
                            Shop
                        </li>
                        <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100'>
                            Collection
                        </li>
                        <li className='cursor-pointer hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100'>
                            Customize
                        </li>
                    </ul>
                    
                    {/* Mobile Search */}
                    <div className='mt-8 sm:hidden'>
                        <button className='flex items-center gap-x-2 text-base font-medium cursor-pointer hover:text-gray-600 transition-colors duration-200'>
                            <CiSearch className='text-2xl'/>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
                    onClick={toggleMobileMenu}
                />
            )}
        </nav>
    )
}

export default Navbar