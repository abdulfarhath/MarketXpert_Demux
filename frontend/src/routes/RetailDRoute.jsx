import React, { useState, useEffect } from 'react';

// If ProductTable is in a separate file, import it here
// import ProductTable from './ProductTable';

const ProductTable = () => {
  return (
    <table className="min-w-full bg-gray-700 text-green-300 mt-8 rounded-md">
      <thead>
        <tr>
          <th className="p-3 text-left">Product Name</th>
          <th className="p-3 text-left">Previous Month's Stock</th>
          <th className="p-3 text-left">Recommended Stocks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3">Product A</td>
          <td className="p-3">150</td>
          <td className="p-3">200</td>
        </tr>
        <tr>
          <td className="p-3">Product B</td>
          <td className="p-3">80</td>
          <td className="p-3">100</td>
        </tr>
        <tr>
          <td className="p-3">Product C</td>
          <td className="p-3">60</td>
          <td className="p-3">75</td>
        </tr>
        <tr>
          <td className="p-3">Product D</td>
          <td className="p-3">120</td>
          <td className="p-3">140</td>
        </tr>
        <tr>
          <td className="p-3">Product E</td>
          <td className="p-3">45</td>
          <td className="p-3">55</td>
        </tr>
        <tr>
          <td className="p-3">Product F</td>
          <td className="p-3">200</td>
          <td className="p-3">220</td>
        </tr>
      </tbody>
    </table>
  );
};

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
          {/* Total Revenue */}
          <div className="bg-gray-700 text-green-300 p-6 rounded-md flex items-center justify-center">
            <h2 className="text-xl font-semibold">Total Revenue: <br /><span className='text-5xl'>$351</span></h2>
          </div>

          {/* Total Orders */}
          <div className="bg-gray-700 text-green-300 p-6 rounded-md flex items-center justify-center">
            <h2 className="text-xl font-semibold">Total Orders:<br /><span className='text-5xl'>&nbsp;&nbsp;&nbsp;31</span></h2>
          </div>
        </div>

        {/* Insert the ProductTable here */}
        <ProductTable />
      </div>
    </div>
  );
};

export default RetailDRoute;
