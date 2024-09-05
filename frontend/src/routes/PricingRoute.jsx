import React from 'react';
import Navbar from '../components/navbar';

const PricingRoute = () => {
    return (
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <Navbar></Navbar>
            <div className="flex flex-col items-center py-12">
                    <h1 className="text-5xl font-bold mb-6">Pricing</h1>
                    <div className="flex space-x-4 mb-8">
                        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Bill Yearly <span className="text-green-500">-20%</span></button>
                        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-500">Bill Monthly</button>
                    </div>
                    <div className="flex space-x-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 w-64">
                            <h2 className="text-xl font-semibold text-green-500">Free</h2>
                            <p className="text-4xl font-bold my-4">$0</p>
                            <p className="text-gray-600 mb-4">For anyone validating Framer as a professional prototyping tool.</p>
                            <ul className="text-gray-600 mb-6">
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Unlimited viewers</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>2 Editors</li>
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>3 projects</li>
                            </ul>
                            <button className="w-full py-2 bg-green-500 text-white rounded-lg">Try for free</button>
                        </div>
                        <div className="bg-green-500 text-white border border-green-500 rounded-lg p-6 w-64">
                            <h2 className="text-xl font-semibold">Starter</h2>
                            <p className="text-4xl font-bold my-4">$12 <span className="text-sm font-normal">Editor/month</span></p>
                            <p className="text-white mb-4">For individuals and teams that need to create, share, and collaborate on prototypes.</p>
                            <ul className="text-white mb-6">
                                <li className="flex items-center mb-2"><i className="fas fa-check text-white mr-2"></i>Everything in Free</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-white mr-2"></i>Unlimited projects</li>
                                <li className="flex items-center"><i className="fas fa-check text-white mr-2"></i>Unlimited editors</li>
                            </ul>
                            <button className="w-full py-2 bg-white text-green-500 rounded-lg">Subscribe</button>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 w-64">
                            <h2 className="text-xl font-semibold text-green-500">Pro</h2>
                            <p className="text-4xl font-bold my-4">$20 <span className="text-sm font-normal">Editor/month</span></p>
                            <p className="text-gray-600 mb-4">For teams that want to manage users, create a design system, and work with developers.</p>
                            <ul className="text-gray-600 mb-6">
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Everything in Starter</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Desktop app</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Offline editing</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Local file access</li>
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Version history <span className="text-green-500">Soon</span></li>
                            </ul>
                            <button className="w-full py-2 bg-green-500 text-white rounded-lg">Subscribe</button>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 w-64">
                            <h2 className="text-xl font-semibold text-green-500">Enterprise</h2>
                            <p className="text-4xl font-bold my-4">Custom</p>
                            <p className="text-gray-600 mb-4">For organizations with 20+ users that need additional control, custom security, and support.</p>
                            <ul className="text-gray-600 mb-6">
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Everything in Pro</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Enterprise SSO</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Dedicated support</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Onboarding & training</li>
                                <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i>Centralized billing</li>
                                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Custom security</li>
                            </ul>
                            <button className="w-full py-2 bg-green-500 text-white rounded-lg">Contact us</button>
                        </div>
                    </div>
                    <a href="#" className="mt-8 text-green-500">Compare all features <i className="fas fa-chevron-down"></i></a>
                </div>
        </div>
    );
};

export default PricingRoute;