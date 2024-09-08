import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
export default function RetailerLogin(){
    const navigate = useNavigate();
    return(
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <Navbar/>
            <div className="w-full max-w-4xl mt-10 p-6 bg-dark-color rounded-lg">
                        <h1 className="text-3xl text-teal-400 mb-6 flex items-center">
                            Business Details <i className="fas fa-briefcase ml-2"></i>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2">Business Name</label>
                                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-600 rounded" />
                            </div>
                            <div>
                                <label className="block mb-2">GSTIN Number</label>
                                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-600 rounded" />
                            </div>
                            <div>
                                <label className="block mb-2">Email</label>
                                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-600 rounded" />
                            </div>
                            <div>
                                <label className="block mb-2">Password</label>
                                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-600 rounded" />
                            </div>
                            <div>
                                <label className="block mb-2">Mobile Number</label>
                                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-600 rounded" value="+91" />
                            </div>
                            <div>
                                <label className="block mb-2">Business Category</label>
                                <select className="w-full p-2 bg-gray-800 border border-gray-600 rounded">
                                    <option>Select Category</option>
                                    <option value="">Groceries</option>
                                    <option value="">Electronics</option>
                                    <option value="">Fashion</option>

                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button onClick={() => navigate('/retailer/login2')} className="bg-teal-400 text-black px-6 py-2 rounded-full flex items-center">
                                Proceed To Next Step 
                            </button>
                        </div>
                        </div>
        </div>
    )
}