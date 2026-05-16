import React from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plan = {
    name: 'PLANO DIÁRIO',
    price: 'R$ 19,90',
    operations: '1 operação por dia',
    odds: 'Odd fixa 1.50',
    analysis: 'Análise profissional',
    guarantee: 'Garantia total',
    icon: Zap,
    featured: true
  }

  return (
    <section id="pricing" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha Seu <span className="text-neon-green neon-text">Plano</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Planos flexíveis para todos os tipos de apostadores. Comece a lucrar hoje mesmo.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative rounded-3xl p-8 md:p-12 transition-all duration-300 bg-gradient-to-br from-neon-green/10 to-emerald-500/10 border-2 border-neon-green neon-border w-full"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black px-6 py-2 rounded-full text-sm font-bold">
              PLANO EXCLUSIVO
            </div>

            <div className="flex items-center justify-center mb-8">
              <plan.icon className="w-20 h-20 text-neon-green" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-center mb-6 text-neon-green neon-text">{plan.name}</h3>

            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">{plan.price}</div>
              <div className="text-gray-400 text-lg">{plan.period}</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-gray-300 text-lg">{plan.operations}</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-gray-300 text-lg">{plan.odds}</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-gray-300 text-lg">{plan.analysis}</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-neon-green flex-shrink-0" />
                <span className="text-gray-300 text-lg">{plan.guarantee}</span>
              </div>
            </div>

            <motion.a
              href="https://go.perfectpay.com.br/PPU38CQC24M"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-neon-green text-black font-bold text-xl py-5 rounded-2xl hover:bg-neon-greenDark transition-all neon-border animate-glow inline-block text-center"
            >
              ASSINAR AGORA
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
