import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, AlertTriangle } from 'lucide-react'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              PROMOÇÃO TERMINA EM:
            </h2>
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-8">
            <div className="glass-strong rounded-2xl p-6 neon-border border-red-500/50">
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-4xl md:text-6xl font-black text-white mb-2">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase">Horas</div>
            </div>

            <div className="glass-strong rounded-2xl p-6 neon-border border-red-500/50">
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-4xl md:text-6xl font-black text-white mb-2">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase">Minutos</div>
            </div>

            <div className="glass-strong rounded-2xl p-6 neon-border border-red-500/50">
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-4xl md:text-6xl font-black text-white mb-2">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase">Segundos</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-green text-black font-bold text-lg px-12 py-4 rounded-xl hover:bg-neon-greenDark transition-all neon-border animate-glow"
          >
            GARANTIR DESCONTO AGORA
          </motion.button>

          <p className="text-gray-400 mt-4 text-sm">
            ⚡ Apenas 47 vagas restantes com preço promocional
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
