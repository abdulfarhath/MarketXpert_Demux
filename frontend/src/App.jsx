import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
import HomeRoute from './routes/HomeRoute'
import LoginRoute from './routes/LoginRoute'
import PricingRoute from './routes/PricingRoute'
import ContactRoute from './routes/ContactRoute'
import AboutRoute from './routes/AboutRoute'


function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/about" element={<AboutRoute />} />

      </Routes>
    </Router>
  )
}

export default App
