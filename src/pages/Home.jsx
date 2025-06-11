import LandingComponent from '../components/home/LandingComponent';
import AboutUsPreview from '../components/home/AboutUsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientInfoSection from '../components/home/ClientInfoSection';
import FAQSection from '../components/home/FAQ';


export default function Home() {
  return (
    <>
      <LandingComponent/>
      <AboutUsPreview/>
      <ServicesPreview/>
      <WhyChooseUs/>
      <ClientInfoSection/>
      <FAQSection/>
    </>
  )
}
