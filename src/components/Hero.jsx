import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <section className="min-h-screen stadium-bg flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Centered Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <motion.img
              src="/logo.png"
              alt="EsportesRetrô logo"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.1,
                filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.9))'
              }}
              style={{
                boxShadow: '0 0 30px rgba(57, 255, 20, 0.4), 0 0 60px rgba(57, 255, 20, 0.2)'
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-neon-green neon-text">ESPORTESRETRÔ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Análises esportivas profissionais com foco em consistência e resultados.
          </motion.p>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}

export default Hero
