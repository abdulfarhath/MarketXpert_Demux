import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="w-[90vw] mt-7 py-4 px-8 flex rounded-3xl justify-between items-center bg-nav-bg-color shadow-md">
            {/* Brand Logo */}
            <h1 className="text-2xl font-bold text-green-color">
                Market<span className="text-white">X</span>pert
            </h1>

            {/* Navigation Links */}
            <nav>
                <ul className="flex space-x-6">
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
        </header>
    );
};

export default Navbar;
