import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
import HomeRoute from './routes/HomeRoute'
import LoginRoute from './routes/LoginRoute'
import PricingRoute from './routes/PricingRoute'
import ContactRoute from './routes/ContactRoute'
import AboutRoute from './routes/AboutRoute'
import ChooseLogin from './routes/ChooseLogin'
import UserLogin from './routes/UserLogin'
import RetailerLogin from './routes/RetailerLogin'
import RetailerLogin2 from './routes/RetailerLogin2'
import RetailDRoute from './routes/RetailDRoute'
import RetailPRoute from './routes/RetailPRoute'
function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/login" element={<ChooseLogin/>} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/retailer/login" element={<RetailerLogin />} />
        <Route path="/retailer/login2" element={<RetailerLogin2 />} />
        <Route path="/retailer/dashboard" element={<RetailDRoute/>} />
        <Route path="/retailer/products" element={<RetailPRoute/>} />
        
      </Routes>
    </Router>
  )
}

export default App