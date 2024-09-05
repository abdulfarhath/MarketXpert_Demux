import { useNavigate } from "react-router-dom"


export default function UserLogin(){
    const navigate = useNavigate();
    return(
        <div style={{ backgroundColor: '#0c0c0c' }} className="text-white min-h-screen flex flex-col items-center">
            {/* <h1>hello</h1> */}
            <div className="text-center text-white">
                    <h1 className="text-5xl font-bold text-teal-400 mb-8">Login</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-left mb-1" htmlFor="email">Email address</label>
                            <input className="w-full px-4 py-2 border border-white rounded bg-black text-white" type="email" id="email" />
                        </div>
                        <div>
                            <label className="block text-left mb-1" htmlFor="password">Password</label>
                            <input className="w-full px-4 py-2 border border-white rounded bg-black text-white" type="password" id="password" />
                        </div>
                        <button className="w-full py-2 bg-teal-400 text-white font-bold rounded">login</button>
                    <p className="mt-4">no account? <a href="http://localhost:5173/retailer/login" className="underline text-white">signup</a></p>
                    </form>
                </div>

        </div>
    )
}