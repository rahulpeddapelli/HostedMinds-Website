import LandingComponent from '../components/home/LandingComponent';
import AboutUsPreview from '../components/home/AboutUsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientInfoSection from '../components/home/ClientInfoSection';
import FAQSection from '../components/home/FAQ';
import { useEffect } from 'react';


export default function Home({setOpenService}) {
  useEffect(() => {
      document.title = "HOSTEDMINDS";
    }, []);
  return (
    <>
      <LandingComponent/>
      <AboutUsPreview/>
      <ServicesPreview setOpenService={setOpenService}/>
      <WhyChooseUs/>
      <ClientInfoSection/>
      <FAQSection/>
    </>
  )
}
