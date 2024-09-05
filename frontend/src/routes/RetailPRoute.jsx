import React from 'react'

const RetailPRoute = () => {
    return (
        <div className="bg-black h-screen flex">
            {/* Sidebar */}
            <div className="bg-gray-800 w-1/5 h-full flex flex-col items-center py-8 space-y-8">
                <div className="bg-gray-600 w-16 h-16 rounded-full"></div>
                <div className="text-green-300">
                    <a href="http://localhost:5173/retailer/dashboard" className="mb-4 block cursor-pointer">Dashboard</a>

                    <a href="http://localhost:5173/retailer/products" className="mb-4 block cursor-pointer">Products</a>

                </div>
            </div>



        </div>
    )
}

export default RetailPRoute;