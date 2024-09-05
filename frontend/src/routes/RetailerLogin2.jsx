import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function RetailerLogin2() {
    const navigate = useNavigate();
    
    return (
        

        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <Navbar />
            
            <div className="w-full max-w-4xl mx-auto mt-12 p-8 bg-[#0c0c0c] rounded-lg shadow-lg">
                <h1 className="text-4xl text-green-400 mb-8 font-bold flex items-center">
                    Bank Details 
                    <i className="fas fa-university ml-2"></i>
                </h1>
                
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="bankName" className="block mb-2">Bank Name</label>
                            <input 
                                type="text" 
                                id="bankName" 
                                name="bankName" 
                                className="w-full p-4 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                            />
                        </div>

                        <div>
                            <label htmlFor="ifscCode" className="block mb-2">IFSC Code</label>
                            <input 
                                type="text" 
                                id="ifscCode" 
                                name="ifscCode" 
                                className="w-full p-4 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                            />
                        </div>

                        <div>
                            <label htmlFor="accountNumber" className="block mb-2">A/C Number</label>
                            <input 
                                type="text" 
                                id="accountNumber" 
                                name="accountNumber" 
                                className="w-full p-4 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                            />
                        </div>

                        <div>
                            <label htmlFor="accountType" className="block mb-2">A/C Type</label>
                            <select 
                                id="accountType" 
                                name="accountType" 
                                className="w-full p-4 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                            >
                                <option value="savings">Savings</option>
                                <option value="current">Current</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="uploadImage" className="block mb-2">Upload Image of Shop</label>
                            <div 
                                className="w-full h-48 flex items-center justify-center bg-[#1e3d4d] text-gray-300 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-green-200
                                 hover:text-black transition-all"
                                id="uploadImage"
                            >
                                click to upload image
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        onClick={() => navigate("/retailer/dashboard")}
                        className="mt-8 w-full py-4 bg-green-400 text-black rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
