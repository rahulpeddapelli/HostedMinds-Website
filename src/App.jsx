import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Shop from './pages/Shop.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './customHooks/ScrollToTop.jsx';
import ScrollToFaq from './customHooks/ScrollToFaq.jsx';


function App() {
 
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToFaq/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
    </>
  )
}

export default App
