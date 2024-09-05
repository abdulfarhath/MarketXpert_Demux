import React from 'react'
const products = [
    {
        id: 1,
        name: "White Headphones",
        price: "$120",
        colors: "5 color Available",
        rating: 4,
        reviews: 12,
        image: "https://placehold.co/300x300?text=White+Headphones",
        alt: "White headphones on a pink background"
    },
    {
        id: 2,
        name: "iPhone 14 pro max",
        price: "$999",
        colors: "5 color Available",
        rating: 4,
        reviews: 12,
        image: "https://placehold.co/300x300?text=iPhone+14+pro+max",
        alt: "iPhone 14 pro max on a gray background"
    },
    {
        id: 3,
        name: "Modern blue smartwatch",
        price: "$550",
        colors: "5 color Available",
        rating: 4,
        reviews: 12,
        image: "https://placehold.co/300x300?text=Modern+blue+smartwatch",
        alt: "Modern blue smartwatch on a blue background"
    },
    {
        id: 4,
        name: "Smartwatch",
        price: "$600",
        colors: "5 color Available",
        rating: 4,
        reviews: 12,
        image: "https://placehold.co/300x300?text=Smartwatch",
        alt: "Smartwatch on a white pedestal"
    }
];
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