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
import UserDashBoard from './routes/UserDashboard'
import AdminLogin from './routes/AdminLogin'
import FashionDashboard from './routes/FashionDashboard'
function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/login" element={<ChooseLogin/>} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<userLogin/>} />
        <Route path="/retailer/login" element={<RetailerLogin />} />
        <Route path="/retailer/login2" element={<RetailerLogin2 />} />
        <Route path="/retailer/dashboard" element={<RetailDRoute/>} />
        <Route path="/retailer/products" element={<RetailPRoute/>} />
        <Route path="/user/dashboard" element={<UserDashBoard/>} />
        <Route path="/user/categories/fashion" element={<FashionDashboard/>} />
      </Routes>
    </Router>
  )
}

export default App