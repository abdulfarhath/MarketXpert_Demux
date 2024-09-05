import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
export default function ChooseLogin() {
  
  const navigate = useNavigate(); // Call useNavigate hook to get the navigate function
  return (
    <div   style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
        <Navbar/>
      <div className="text-white">
       
        <div className="flex justify-center mt-16 space-x-8">
          <div className="bg-teal-900 p-8 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">For Retailer</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Customer Support Integration
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Personalised Customer Insights
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Inventory Management
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Promotions and Marketing Tools
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Retail Analytics and Forecasting
              </li>
            </ul>
            <button
              onClick={() => navigate('/admin/login')} // Use a function to call navigate
              className="mt-6 bg-teal-400 text-teal-900 font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </div>
          <div className="bg-teal-900 p-8 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">For Buyer</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Customer Support Integration
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Personalised Customer Insights
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Inventory Management
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Promotions and Marketing Tools
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-400 mr-2"></i>
                Retail Analytics and Forecasting
              </li>
            </ul>
            <button
              onClick={() => navigate('/user/dashboard')} // Use a function to call navigate
              className="mt-6 bg-teal-400 text-teal-900 font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
