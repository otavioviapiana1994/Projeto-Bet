import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, MessageSquare, Play, TrendingUp, Wallet } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: 'Escolha um Plano',
      description: 'Selecione o plano ideal para o seu perfil e orçamento',
      step: '01'
    },
    {
      icon: MessageSquare,
      title: 'Entre na Sala VIP',
      description: 'Receba acesso imediato aos nossos canais exclusivos',
      step: '02'
    },
    {
      icon: Play,
      title: 'Receba os Sinais',
      description: 'Nossos analistas enviam sinais profissionais em tempo real',
      step: '03'
    },
    {
      icon: Wallet,
      title: 'Faça suas Entradas',
      description: 'Siga as orientações e faça suas apostas com confiança',
      step: '04'
    },
    {
      icon: TrendingUp,
      title: 'Acompanhe os Lucros',
      description: 'Veja seu bankroll crescer consistentemente dia após dia',
      step: '05'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="text-neon-green neon-text">Funciona</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Em apenas 5 passos simples, você começa a lucrar com nossos sinais profissionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 h-full relative z-10">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-green text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neon-green/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-neon-green" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-neon-green to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-neon-green text-black font-bold px-8 py-3 rounded-xl hover:bg-neon-greenDark transition-all neon-border">
            Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
