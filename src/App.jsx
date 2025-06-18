import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Shop from './pages/Shop.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './utilityFunctions/ScrollToTop.jsx';
import ScrollToFaq from './utilityFunctions/ScrollToFaq.jsx';
import { useState } from 'react';
import NotFound from './pages/NotFound.jsx';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";




function App() {
  const [currentOpenService, setOpenService] = useState("STEM");
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
    <PrimeReactProvider>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToFaq offset={navbarHeight} />
      <NavBar setOpenService={setOpenService} setNavbarHeight={setNavbarHeight}/>
      <Routes>
        <Route path="/" element={<Home setOpenService={setOpenService}/>} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services currentOpenService={currentOpenService} setOpenService={setOpenService}/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
    </PrimeReactProvider>
    </>
  )
}

export default App;







// ! for including track faq view function

// import NavBar from './components/NavBar.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import AboutUs from './pages/AboutUs.jsx';
// import Services from './pages/Services.jsx';
// import Shop from './pages/Shop.jsx';
// import ContactUs from './pages/ContactUs.jsx';
// import Footer from './components/Footer.jsx';
// import ScrollToTop from './customHooks/ScrollToTop.jsx';
// import ScrollToFaq from './customHooks/ScrollToFaq.jsx';
// import useFaqExitTracker from './customHooks/useFaqExitTracker.jsx';
// import { useState } from 'react';

// function App() {
//   const [currentOpenService, setOpenService] = useState("STEM");
//   const [navbarHeight, setNavbarHeight] = useState(0);


//   return (
//     <BrowserRouter>
//       <AppContent
//         currentOpenService={currentOpenService}
//         setOpenService={setOpenService}
//         setNavbarHeight={setNavbarHeight}
//         navbarHeight={navbarHeight}
//       />
//     </BrowserRouter>
//   );
// }

// function AppContent({ currentOpenService, setOpenService, setNavbarHeight, navbarHeight }) {
//   // useFaqExitTracker(); 

//   return (
//     <>
//       <ScrollToTop />
//       <ScrollToFaq offset={navbarHeight}/>
//       <NavBar setOpenService={setOpenService} setNavbarHeight={setNavbarHeight} />
//       <Routes>
//         <Route path="/" element={<Home setOpenService={setOpenService} />} />
//         <Route path="/aboutUs" element={<AboutUs />} />
//         <Route
//           path="/services"
//           element={
//             <Services
//               currentOpenService={currentOpenService}
//               setOpenService={setOpenService}
//             />
//           }
//         />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/contactUs" element={<ContactUs />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

