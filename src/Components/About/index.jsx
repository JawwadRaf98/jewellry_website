import React from 'react'
import AboutMain from './components/AboutMain'
import AboutusContent from './components/AboutusContent'
import CustomerSatisfaction from './components/CustomerSatisfaction'
import MainVideo from './components/MainVideo'
import OurMission from './components/OurMission'
import WhyChooseLAVISA from './components/WhyChooseLAVISA'

const index = () => {
  return (
    <>
    <MainVideo />
      <AboutMain />
      <AboutusContent />
      <OurMission />
      <WhyChooseLAVISA />
      <CustomerSatisfaction />
    </>
  )
}

export default index
