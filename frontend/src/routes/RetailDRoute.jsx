import React, { useState, useEffect } from 'react';

const RetailDRoute = () => {
  // States for backend values
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [totalOrders, setTotalOrders] = useState(null);

  // Simulate fetching data from backend
  useEffect(() => {
    // Replace these values with actual API calls to fetch data
    setTotalRevenue(15000);
    setTotalOrders(120);
  }, []);

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

      {/* Main Content */}
      <div className="flex-1 bg-black p-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Total Sales */}
          

          {/* Total Revenue */}
          <div className="bg-gray-700 text-green-300 p-6 rounded-md flex items-center justify-center">
            <h2 className="text-xl font-semibold">Total Revenue: </h2>
          </div>

          {/* Total Orders */}
          <div className="bg-gray-700 text-green-300 p-6 rounded-md flex items-center justify-center">
            <h2 className="text-xl font-semibold">Total Orders</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RetailDRoute;
