import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function UserLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        try {
            // Send the email and password to the server
            const response = await axios.post('http://localhost:3000/admin/signin', { email, password });

            // Handle successful response
            console.log('Login successful:', response.data);
            // Navigate to the desired page upon successful login
            navigate('/dashboard'); // Replace '/dashboard' with your desired route
        } catch (err) {
            // Handle errors (e.g., invalid credentials)
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'An error occurred during login.');
        }
    };

    return (
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-left mb-1" htmlFor="email">Email address</label>
                        <input
                            className="w-full px-4 py-2 border border-white rounded bg-black text-white"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-left mb-1" htmlFor="password">Password</label>
                        <input
                            className="w-full px-4 py-2 border border-white rounded bg-black text-white"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="w-full py-2 bg-teal-400 text-white font-bold rounded">
                        Login
                    </button>
                    <p className="mt-4">No account? <a href="http://localhost:5173/retailer/signup" className="underline text-white">Sign up</a></p>
                </form>
            </div>
        </div>
    );
}
