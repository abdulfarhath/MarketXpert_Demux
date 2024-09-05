import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 

const HomeRoute = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the /login route
  };

  return (
    <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar />
    
      {/* Hero Section */}
      <main className="flex-1 bg-[#0c0c0c] flex flex-col justify-center items-center text-center px-6 py-12">
        <h1 className='text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6 lg:mb-8'>
          Empowering <span className='text-green-color'>Retail</span> through <br/>
          Smart<span className='text-green-color'> Tech solutions</span> 
        </h1>
        <p className="text-gray-300 w-[60vw] mb-4 md:mb-6 lg:mb-8 text-base md:text-lg lg:text-xl">
          Our platform leverages cutting-edge technology to revolutionize the
          retail experience. From concept to implementation, we turn your ideas into innovative solutions, instantly.
        </p>

        <button 
          className="bg-green-color text-white px-12 py-4 rounded-[24px] hover:bg-teal-600 font-[400] text-xl" 
          onClick={handleGetStartedClick} // Add onClick handler
        >
          Get Started →
        </button>
      </main>
    </div>
  );
};

export default HomeRoute;
