import React from 'react'
import { motion } from 'framer-motion'
import { Star, MessageCircle, CheckCircle, Users } from 'lucide-react'

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      location: 'São Paulo, SP',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Recuperei todo o investimento em 3 dias! Os sinais são incríveis e o suporte é top.',
      profit: 'R$ 12.450',
      days: '45 dias'
    },
    {
      name: 'Ana Paula',
      location: 'Rio de Janeiro, RJ',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Nunca vi tanta consistência. Já lucrei mais em um mês do que em todo o ano passado.',
      profit: 'R$ 8.920',
      days: '30 dias'
    },
    {
      name: 'Ricardo Santos',
      location: 'Belo Horizonte, MG',
      avatar: '👨‍💻',
      rating: 5,
      text: 'A EsportesRetrô vale cada centavo. Os analistas realmente sabem o que estão fazendo.',
      profit: 'R$ 15.780',
      days: '60 dias'
    }
  ]

  const whatsappMessages = [
    { name: 'Fernando L.', time: '2 min atrás', message: 'Acabei de lucrar R$ 890 com o sinal de hoje! 🔥' },
    { name: 'Marina C.', time: '5 min atrás', message: 'Mais um green! Já são 7 seguidos essa semana' },
    { name: 'Pedro H.', time: '8 min atrás', message: 'Recuperei o investimento do plano mensal hoje mesmo!' },
    { name: 'Lucas M.', time: '12 min atrás', message: 'Essa sala é demais, obrigado pela oportunidade' }
  ]

  return (
    <section className="py-20 bg-dark-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="text-neon-green neon-text">Membros Dizem</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mais de 2.800 membros satisfeitos lucrando todos os dias com nossos sinais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-neon-green" />
                    <span className="text-neon-green font-bold">{testimonial.profit}</span>
                  </div>
                  <div className="text-gray-400 text-sm">em {testimonial.days}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-neon-green" />
              <h3 className="text-xl font-bold">Mensagens em Tempo Real</h3>
            </div>
            <div className="space-y-4">
              {whatsappMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-dark-cardLight rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{msg.name}</span>
                    <span className="text-gray-500 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{msg.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-neon-green" />
            <h3 className="text-2xl font-bold">Junte-se a +2.847 Membros</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Nossa comunidade está crescendo a cada dia. Não fique de fora dessa oportunidade de lucrar com apostas esportivas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <span className="text-gray-300">Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <span className="text-gray-300">Sinais Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <span className="text-gray-300">Comunidade Ativa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
