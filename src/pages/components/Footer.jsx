import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import footerlogo from '../../assets/footerLogo.png';
import { toast } from 'react-toastify';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            toast.success(`Subscribed with: ${email}`);
            setEmail('');
        }
    };

    return (
        <div className="bg-black py-20">
            <div className="container">

                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

                    {/* Left Section */}
                    <div>
                        <img src={footerlogo} alt="Footer Logo" className="mb-4" />

                        <p className="text-gray-400 text-sm leading-relaxed lg:w-[300px]">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center 
                                           hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                            >
                                <FaFacebookF className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center 
                                           hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 
                                           transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                            >
                                <FaInstagram className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">
                            Subscribe for news latter
                        </h3>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter Email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-3 bg-white text-black rounded-l focus:outline-none"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="px-6 py-3 bg-white text-black font-semibold rounded-r 
                                           hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Shop', 'Category', 'Contact', 'Privacy'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        www.slick.com © all right reserve
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
