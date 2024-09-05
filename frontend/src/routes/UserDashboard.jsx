import React from 'react';

export default function UserDashBoard(){
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Simplifying Retail: A Smarter Way to Sell</h2>
          <div className="flex justify-between items-center">
            <div className="w-full md:w-1/2">
              <input type="text" placeholder="Search" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500" />
            </div>
            <img src="https://i.ibb.co/7X4b15t/illustration.png" alt="Illustration" className="w-48 md:w-40" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
              <img src="https://i.ibb.co/VqG3V5T/fashion.jpg" alt="Fashion" className="w-full rounded-md" />
              <p className="text-center mt-2">FASHION</p>
            </div>
            <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
              <img src="https://i.ibb.co/hV74vW8/electronics.jpg" alt="Electronics" className="w-full rounded-md" />
              <p className="text-center mt-2">ELECTRONICS</p>
            </div>
            <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
              <img src="https://i.ibb.co/gD5mK57/groceries.jpg" alt="Groceries" className="w-full rounded-md" />
              <p className="text-center mt-2">GROCERIES</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Interactive Shopping Assistant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
              <p>Experience seamless shopping with our integrated AI-powered chatbot, ready to assist customers 24/7, answer queries, guide purchases, and enhance overall satisfaction-making your online store smarter and more responsive.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-4">Learn More</button>
            </div>
            <div className="bg-gray-800 rounded-md p-4 hover:bg-gray-700">
              <img src="https://i.ibb.co/M5g1C7t/chatbot.png" alt="Chatbot" className="w-full h-48" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default MarketXpert;