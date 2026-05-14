import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import Countdown from './components/Countdown'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ConversionPopup from './components/ConversionPopup'
import PurchaseNotifications from './components/PurchaseNotifications'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
    
    // Show popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(popupTimer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <Pricing />
      <Results />
      <HowItWorks />
      <SocialProof />
      <Countdown />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <PurchaseNotifications />
      {showPopup && <ConversionPopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default App
