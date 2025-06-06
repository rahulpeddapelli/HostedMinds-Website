import React,{useState} from 'react';
import LandingComponent from '../components/home/LandingComponent';
import AboutUsPreview from '../components/home/AboutUsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientInfoSection from '../components/home/ClientInfoSection';
import ClientFeedbackForm from '../components/home/clientFeedbackForm';

export default function Home() {
  const [feedbackFormActive, setFeedBackFormActive] = useState(false);
  return (
    <div>
      <LandingComponent/>
      <AboutUsPreview/>
      <ServicesPreview/>
      <WhyChooseUs/>
      <ClientInfoSection/>
      <ClientFeedbackForm/>
    </div>
  )
}
