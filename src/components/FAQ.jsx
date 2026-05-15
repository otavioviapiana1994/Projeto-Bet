import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Como recebo os sinais?',
      answer: 'Após assinar um plano, você receberá acesso imediato aos nossos canais exclusivos no Telegram e Discord. Os sinais são enviados em tempo real, com todas as informações necessárias para fazer suas entradas.'
    },
    {
      question: 'Qual a média de acerto?',
      answer: 'Nossa média histórica de acerto é de 87%. Trabalhamos com gestão de bankroll profissional e focamos em consistência a longo prazo, não em promessas impossíveis de curto prazo.'
    },
    {
      question: 'Tem garantia?',
      answer: 'Sim! Oferecemos garantia de 7 dias. Se você não ficar satisfeito com os resultados neste período, devolvemos 100% do seu investimento, sem perguntas.'
    },
    {
      question: 'Funciona para iniciantes?',
      answer: 'Com certeza! Nossos sinais são detalhados e fáceis de seguir. Além disso, oferecemos suporte completo e materiais educativos para ajudar iniciantes a entenderem melhor o mundo das apostas.'
    },
    {
      question: 'Preciso apostar alto?',
      answer: 'Não! Trabalhamos com gestão de bankroll responsável. Você pode começar com valores pequenos e ir aumentando conforme seu lucro. O importante é a consistência, não o valor apostado.'
    },
    {
      question: 'Quais esportes são cobertos?',
      answer: 'Focamos principalmente em futebol (Brasileirão, Premier League, La Liga, Champions League, etc.), mas também cobrimos basquete, tênis e outros esportes conforme surgem oportunidades valiosas.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-neon-green" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Perguntas <span className="text-neon-green neon-text">Frequentes</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar. Estamos aqui para ajudar.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-neon-green flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-400 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/553187646492"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-green text-black font-bold px-8 py-3 rounded-xl hover:bg-neon-greenDark transition-all neon-border"
          >
            Falar com Suporte
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
