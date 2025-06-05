import React from 'react'
import LandingComponent from '../components/home/LandingComponent'
import RotatingText from '../components/home/RotatingText'
import AboutUsPreview from '../components/home/AboutUsPreview'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'

export default function Home() {
  return (
    <div>
      <LandingComponent/>
      <AboutUsPreview/>
      <ServicesPreview/>
      <WhyChooseUs/>
    </div>
  )
}
