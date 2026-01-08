import React from 'react'
import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.png'
import pro5 from '../../assets/pro5.png'
import pro6 from '../../assets/pro6.png'
import { IoArrowRedoCircle } from 'react-icons/io5'

const BestSelling = () => {
    const products = [
        { id: 1, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro1 },
        { id: 2, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro2 },
        { id: 3, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro3 },
        { id: 4, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro4 },
        { id: 5, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro5 },
        { id: 6, title: 'Slick formal sneaker shoe', price: 2999, oldPrice: 4999, image: pro6 },
    ]

    return (
        <div className="container py-[60px] md:py-[100px]">

            {/* header */}
            <div className="flex items-center justify-center gap-x-[12px] md:gap-x-[20px]">
                <div className="bg-black h-[3px] w-[30px] md:w-[50px]" />
                <h1 className="font-poppins font-medium text-[28px] md:text-[36px] lg:text-[45px]">
                    Best Selling
                </h1>
                <div className="bg-black h-[3px] w-[30px] md:w-[50px]" />
            </div>

            {/* nav links */}
            <div className="pt-[40px] md:pt-[62px] pb-[50px] md:pb-[81px]">
                <ul className="flex flex-wrap items-center justify-center gap-[15px] md:gap-x-[40px] font-poppins">
                    {['Men', 'Women', 'Boy', 'Child'].map((item) => (
                        <li
                            key={item}
                            className="bg-black text-white font-medium 
                                       py-[12px] px-[25px] md:py-[18px] md:px-[35px]
                                       cursor-pointer hover:bg-transparent hover:text-black 
                                       duration-500 transition border"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] pb-[80px] md:pb-[100px]">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border border-[#b4b4b4] border-[2px] rounded-[25px] relative overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full object-cover"
                        />

                        {/* badge */}
                        <div className="absolute top-[5%] left-0">
                            <p className="bg-black text-white py-[4px] pr-[10px] pl-[14px] 
                                          text-[14px] font-poppins rounded-r-2xl">
                                New
                            </p>
                        </div>

                        <div className="px-[20px] md:px-[35px] lg:px-[50px] pb-[30px] md:pb-[50px]">
                            <p className="font-poppins text-[18px] md:text-[22px] lg:text-[24px] font-medium">
                                {product.title}
                            </p>

                            <div className="pt-[18px] flex items-center justify-between gap-x-[15px]">
                                <p className="font-poppins text-[18px] md:text-[22px] lg:text-[24px]">
                                    ₹ {product.price}.00
                                </p>

                                <p className="line-through text-gray-400 text-[14px] md:text-[16px]">
                                    ₹ {product.oldPrice}.00
                                </p>

                                <IoArrowRedoCircle className="text-[30px] md:text-[36px] lg:text-[40px] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSelling
