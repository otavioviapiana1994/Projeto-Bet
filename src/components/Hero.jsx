import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, DollarSign, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [counters, setCounters] = useState({
    accuracy: 0,
    roi: 0,
    members: 0,
    profit: 0
  })

  useEffect(() => {
    const targetValues = {
      accuracy: 87,
      roi: 156,
      members: 2847,
      profit: 847
    }

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounters({
        accuracy: Math.round(targetValues.accuracy * progress),
        roi: Math.round(targetValues.roi * progress),
        members: Math.round(targetValues.members * progress),
        profit: Math.round(targetValues.profit * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(targetValues)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen stadium-bg flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-semibold mb-6">
              🚀 +2.847 Membros Ativos
            </span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-green text-black font-bold text-lg px-12 py-4 rounded-xl hover:bg-neon-greenDark transition-all neon-border animate-glow flex items-center gap-3 mx-auto"
            >
              ENTRAR NA SALA VIP
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-1">
                {counters.accuracy}%
              </div>
              <div className="text-gray-400 text-sm">Taxa de Acerto</div>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-1">
                {counters.roi}%
              </div>
              <div className="text-gray-400 text-sm">ROI Mensal</div>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-1">
                {counters.members.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">Membros Online</div>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-1">
                R${counters.profit}K
              </div>
              <div className="text-gray-400 text-sm">Lucro Acumulado</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}

export default Hero
