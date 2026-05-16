import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <motion.img
              src="/logo.png"
              alt="EsportesRetrô logo"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                filter: 'drop-shadow(0 0 15px rgba(57, 255, 20, 0.8))'
              }}
              style={{
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)'
              }}
            />
            <span className="text-2xl font-bold">
              ESPORTES<span className="text-neon-green neon-text">RETRÔ</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-white hover:text-neon-green transition-colors">
              Planos
            </a>
            <a href="#how-it-works" className="text-white hover:text-neon-green transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="text-white hover:text-neon-green transition-colors">
              FAQ
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-strong rounded-lg p-4"
          >
            <div className="flex flex-col gap-4">
              <a href="#pricing" className="text-white hover:text-neon-green transition-colors">
                Planos
              </a>
              <a href="#how-it-works" className="text-white hover:text-neon-green transition-colors">
                Como Funciona
              </a>
              <a href="#faq" className="text-white hover:text-neon-green transition-colors">
                FAQ
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
