import React from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import WhatItIs from '../components/WhatItIs'
import TrainerBio from '../components/TrainerBio'
import PhotoGallery from '../components/PhotoGallery'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import NutritionMindset from '../components/NutritionMindset'
import PricingTeaser from '../components/PricingTeaser'

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatItIs />
      <TrainerBio />
      <PhotoGallery />
      <Testimonials />
      <HowItWorks />
      <NutritionMindset />
      <PricingTeaser />
    </>
  )
}

export default Home
