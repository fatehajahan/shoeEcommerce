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
        {
            id: 1,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro1,
        },
        {
            id: 2,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro2,
        },
        {
            id: 3,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro3,
        },
        {
            id: 4,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro4,
        },
        {
            id: 5,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro5,
        },
        {
            id: 6,
            title: 'Slick formal sneaker shoe',
            price: 2999,
            oldPrice: 4999,
            image: pro6,
        },
    ]
    return (
        <div className="container">
            {/* header */}
            <div className="flex items-center justify-center gap-x-[15px]">
                <div className="bg-black h-[3px] w-[50px]" />
                <h1 className="font-poppins font-medium text-[45px]">
                    Best Selling
                </h1>
                <div className="bg-black h-[3px] w-[50px]" />
            </div>

            {/* nav links */}
            <div className="pt-[62px] pb-[81px]">
                <ul className="flex items-center justify-center gap-x-[64px] font-poppins">
                    {['Men', 'Women', 'Boy', 'Child'].map((item) => (
                        <li
                            key={item}
                            className="bg-black text-white font-medium py-[20px] px-[35px] cursor-pointer hover:bg-transparent hover:text-black duration-500 transition border"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* products grid */}
            <div className="grid grid-cols-3 gap-[30px] pb-[100px]">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border border-[#b4b4b4] border-[2px] rounded-[25px] relative"
                    >
                        <img src={product.image} alt={product.title} />
                        <div className='absolute top-[5%] left-0'>
                            <p className='bg-black text-white py-[4px] pr-[8px] pl-[12px] font-poppins rounded-r-2xl'>New</p>
                        </div>
                        <div className="px-[50px] pb-[50px]">
                            <p className="font-poppins text-[24px] font-medium">
                                {product.title}
                            </p>

                            <div className="pt-[21px] flex items-center justify-between gap-x-[25px]">
                                <p className="font-poppins text-[24px]">
                                    ₹ {product.price}.00
                                </p>

                                <p className="line-through text-gray-400">
                                    ₹ {product.oldPrice}.00
                                </p>

                                <IoArrowRedoCircle className="text-[40px] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSelling