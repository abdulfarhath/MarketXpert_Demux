import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="w-[90vw] max-w-[1280px] py-4 px-8 flex justify-center rounded-[24px] mt-8 ml-20 bg-nav-bg-color shadow-md">
            {/* Centered container */}
            <div className="w-[90vw] max-w-[1280px] flex justify-between items-center rounded-3xl">
                {/* Brand Logo */}
                <h1 className="text-2xl font-bold text-green-color">
                    Market<span className="text-white">X</span>pert
                </h1>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-10 text-white">
                        <li>
                            <Link to="/" className="hover:text-teal-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="hover:text-teal-300">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-teal-300">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-teal-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-teal-300">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
