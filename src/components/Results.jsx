import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, XCircle, Trophy, Calendar } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Results = () => {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev < 100 ? prev + 1 : prev))
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const chartData = [
    { month: 'Jan', profit: 12 },
    { month: 'Fev', profit: 28 },
    { month: 'Mar', profit: 45 },
    { month: 'Abr', profit: 62 },
    { month: 'Mai', profit: 89 },
    { month: 'Jun', profit: 127 },
  ]

  const recentBets = [
    { match: 'Real Madrid vs Barcelona', prediction: 'Over 2.5', odds: 1.85, result: 'green', profit: 'R$ 850' },
    { match: 'Manchester City vs Liverpool', prediction: 'Both Teams Score', odds: 1.72, result: 'green', profit: 'R$ 720' },
    { match: 'Bayern vs Dortmund', prediction: 'Bayern Win', odds: 1.65, result: 'green', profit: 'R$ 650' },
    { match: 'PSG vs Marseille', prediction: 'PSG -1.5', odds: 1.90, result: 'green', profit: 'R$ 900' },
    { match: 'Juventus vs Inter', prediction: 'Under 3.5', odds: 1.78, result: 'red', profit: '-R$ 390' },
    { match: 'Arsenal vs Chelsea', prediction: 'Arsenal Win', odds: 2.10, result: 'green', profit: 'R$ 1.100' },
  ]

  return (
    <section id="results" className="py-20 bg-dark-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(57,255,20,0.1),transparent_50%)]" />
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
            Nossos <span className="text-neon-green neon-text">Resultados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparência total. Veja nossos resultados reais e acompanhe cada vitória.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-neon-green" />
              Crescimento Mensal
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #39FF14', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#39FF14"
                    strokeWidth={3}
                    dot={{ fill: '#39FF14', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="text-neon-green" />
              Últimos Sinais
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentBets.map((bet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-dark-cardLight rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{bet.match}</div>
                    <div className="text-gray-400 text-xs">{bet.prediction} @ {bet.odds}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {bet.result === 'green' ? (
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`font-bold ${bet.result === 'green' ? 'text-neon-green' : 'text-red-500'}`}>
                      {bet.profit}
                    </span>
                  </div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-neon-green mb-2">87%</div>
            <div className="text-gray-400">Taxa de Acerto</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-neon-green mb-2">1.847</div>
            <div className="text-gray-400">Sinais Green</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-red-500 mb-2">278</div>
            <div className="text-gray-400">Sinais Red</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-neon-green mb-2">R$ 847K</div>
            <div className="text-gray-400">Lucro Total</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
