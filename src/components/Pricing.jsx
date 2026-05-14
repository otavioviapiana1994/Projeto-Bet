import React from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Plano Diário',
      price: 'R$ 29,90',
      originalPrice: 'R$ 49,90',
      signals: '5-7',
      odds: '1.80-2.50',
      support: 'Email',
      access: 'Telegram',
      icon: Zap,
      featured: false,
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      name: 'Plano Semanal',
      price: 'R$ 79,90',
      originalPrice: 'R$ 129,90',
      signals: '35-45',
      odds: '1.80-2.80',
      support: 'Email + Telegram',
      access: 'Telegram + Discord',
      icon: Star,
      featured: false,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Plano Mensal',
      price: 'R$ 199,90',
      originalPrice: 'R$ 349,90',
      signals: '150-180',
      odds: '1.80-3.00',
      support: 'Prioritário 24/7',
      access: 'Telegram + Discord + WhatsApp',
      icon: Crown,
      featured: true,
      color: 'from-neon-green/20 to-emerald-500/20'
    },
    {
      name: 'Premium VIP',
      price: 'R$ 499,90',
      originalPrice: 'R$ 899,90',
      signals: 'Ilimitados',
      odds: '1.80-5.00',
      support: 'Dedicado',
      access: 'Todos os Canais + Acesso Exclusivo',
      icon: Crown,
      featured: false,
      color: 'from-yellow-500/20 to-orange-500/20'
    }
  ]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-neon-green/10 to-emerald-500/10 border-2 border-neon-green neon-border'
                  : 'glass hover:border-neon-green/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-black px-4 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}

              <div className="flex items-center justify-center mb-6">
                <plan.icon className={`w-12 h-12 ${plan.featured ? 'text-neon-green' : 'text-gray-400'}`} />
              </div>

              <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>

              <div className="text-center mb-6">
                <div className="text-gray-500 line-through text-sm">{plan.originalPrice}</div>
                <div className="text-4xl font-black text-white">{plan.price}</div>
                <div className="text-gray-400 text-sm">por período</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{plan.signals} sinais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Odds médias: {plan.odds}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Suporte: {plan.support}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Acesso: {plan.access}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.featured
                    ? 'bg-neon-green text-black hover:bg-neon-greenDark neon-border'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ASSINAR AGORA
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
