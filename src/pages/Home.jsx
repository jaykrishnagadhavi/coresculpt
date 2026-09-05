import React from 'react'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import PhotoGallery from '../components/PhotoGallery'
import NoGymSection from '../components/NoGymSection'

import HowItWorks from '../components/HowItWorks'
import WhatYouGet from '../components/WhatYouGet'
import TrainerBio from '../components/TrainerBio'
import FAQ from '../components/FAQ'
import PricingTeaser from '../components/PricingTeaser'
import TrustBar from '../components/TrustBar'
import FreeWorkouts from '../components/FreeWorkouts'

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <PhotoGallery />
      <NoGymSection />

      <HowItWorks />
      <WhatYouGet />
      <TrainerBio />
      <FAQ />
      <FreeWorkouts />
      <PricingTeaser />
    </>
  )
}

export default Home
