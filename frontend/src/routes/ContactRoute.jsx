import React from 'react';
import Navbar from '../components/navbar';

const ContactRoute = () => {
    return (
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <Navbar />
            <div className=" text-white min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6">Contact our team</h1>
                    <p className="text-gray-400 mb-8">
                        Got any questions about the product or looking for assistance? We're here to help.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-4 text-white rounded-lg focus:outline focus:ring-2 focus:ring-green-colr bg-transparent"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-color bg-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-color bg-transparent"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-color bg-transparent"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            className="w-full p-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-color h-32 bg-transparent"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-4 bg-green-color text-black rounded-lg hover:bg-green-color transition duration-300"
                        >
                            Send message
                        </button>
                    </form>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h4 className="text-lg font-bold">Chat with us</h4>
                            <p className="text-gray-400">We're available 24/7</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold">Email us</h4>
                            <p className="text-gray-400">support@example.com</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold">Call us</h4>
                            <p className="text-gray-400">+123 456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactRoute;
