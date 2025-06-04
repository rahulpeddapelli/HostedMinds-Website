import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Shop from './pages/Shop.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/contactUs" element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
