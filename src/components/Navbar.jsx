import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

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
            className="flex items-center gap-2"
          >
            <Shield className="w-8 h-8 text-neon-green" />
            <span className="text-2xl font-bold">
              ESPORTES<span className="text-neon-green neon-text">RETRÔ</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-white hover:text-neon-green transition-colors">
              Planos
            </a>
            <a href="#results" className="text-white hover:text-neon-green transition-colors">
              Resultados
            </a>
            <a href="#how-it-works" className="text-white hover:text-neon-green transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="text-white hover:text-neon-green transition-colors">
              FAQ
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-green text-black font-bold px-6 py-2 rounded-lg hover:bg-neon-greenDark transition-colors neon-border"
            >
Entrar VIP
            </motion.button>
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
              <a href="#results" className="text-white hover:text-neon-green transition-colors">
                Resultados
              </a>
              <a href="#how-it-works" className="text-white hover:text-neon-green transition-colors">
                Como Funciona
              </a>
              <a href="#faq" className="text-white hover:text-neon-green transition-colors">
                FAQ
              </a>
              <button className="bg-neon-green text-black font-bold px-6 py-2 rounded-lg hover:bg-neon-greenDark transition-colors">
  Entrar VIP
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
