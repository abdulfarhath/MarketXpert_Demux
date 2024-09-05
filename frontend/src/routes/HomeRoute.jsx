// import React from 'react';

// const HomeRoute = () => {

  

//   const categories = [
//     { name: 'Groceries', imageUrl: 'https://via.placeholder.com/200?text=Groceries' },
//     { name: 'Clothing', imageUrl: 'https://via.placeholder.com/200?text=Clothing' },
//     { name: 'Electronics', imageUrl: 'https://via.placeholder.com/200?text=Electronics' },
//     { name: 'Home Appliances', imageUrl: 'https://via.placeholder.com/200?text=Home+Appliances' },
//     { name: 'Books', imageUrl: 'https://via.placeholder.com/200?text=Books' },
//     { name: 'Furniture', imageUrl: 'https://via.placeholder.com/200?text=Furniture' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 p-6 text-white text-center text-3xl font-bold">
//         Welcome to the Retail App
//       </header>

//       <main className="p-6">
//         <h1 className="text-2xl font-semibold mb-4">Categories</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((category) => (
//             <div key={category.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img className="w-full h-48 object-cover" src={category.imageUrl} alt={category.name} />
//               <div className="p-4">
//                 <h2 className="text-lg font-bold">{category.name}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="bg-gray-800 text-white text-center p-4 mt-8">
//         &copy; 2024 Retail App. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default HomeRoute;

import Navbar from '../components/navbar';
import React from 'react';
import '../index.css'; // Import your Tailwind CSS styles

const HomeRoute = () => {
  return (
    <div   style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />
    
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12">
      <h1 className='text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6 lg:mb-8'>
          Empowering <span className='text-green-color'>Retail</span> through <br/>
          Smart<span className='text-green-color'> Tech solutions</span> 
      </h1>
      <p className="text-gray-300 w-[60vw] mb-4 md:mb-6 lg:mb-8 text-base md:text-lg lg:text-xl">
          Our platform leverages cutting-edge technology to revolutionize the
          retail experience. From concept to implementation, we turn your ideas into innovative solutions, instantly.
      </p>

        <button className="bg-green-color text-white px-12 py-4 rounded-[24px] hover:bg-teal-600 font-[400] text-xl ">
          Get Started →
        </button>
      </main>
    </div>
  );
};

export default HomeRoute;
