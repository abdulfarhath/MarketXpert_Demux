import React from 'react';

const HomeRoute = () => {

  

  const categories = [
    { name: 'Groceries', imageUrl: 'https://via.placeholder.com/200?text=Groceries' },
    { name: 'Clothing', imageUrl: 'https://via.placeholder.com/200?text=Clothing' },
    { name: 'Electronics', imageUrl: 'https://via.placeholder.com/200?text=Electronics' },
    { name: 'Home Appliances', imageUrl: 'https://via.placeholder.com/200?text=Home+Appliances' },
    { name: 'Books', imageUrl: 'https://via.placeholder.com/200?text=Books' },
    { name: 'Furniture', imageUrl: 'https://via.placeholder.com/200?text=Furniture' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-6 text-white text-center text-3xl font-bold">
        Welcome to the Retail App
      </header>

      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={category.imageUrl} alt={category.name} />
              <div className="p-4">
                <h2 className="text-lg font-bold">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        &copy; 2024 Retail App. All rights reserved.
      </footer>
    </div>
  );
};

export default HomeRoute;
