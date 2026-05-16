import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/70" />
      
      {/* Cinematic Blur Effect */}
      <div className="fixed inset-0 z-0 backdrop-blur-sm" />
      
      {/* Green Glow Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/3 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}

export default App
