import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, CheckCircle, X } from 'lucide-react'

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState([])

  const purchases = [
    { name: 'Carlos S.', plan: 'Plano Mensal', city: 'São Paulo' },
    { name: 'Ana M.', plan: 'Plano Semanal', city: 'Rio de Janeiro' },
    { name: 'Pedro L.', plan: 'Premium', city: 'Belo Horizonte' },
    { name: 'Juliana R.', plan: 'Plano Diário', city: 'Curitiba' },
    { name: 'Ricardo F.', plan: 'Plano Mensal', city: 'Salvador' },
    { name: 'Fernanda K.', plan: 'Premium', city: 'Brasília' },
    { name: 'Lucas T.', plan: 'Plano Semanal', city: 'Fortaleza' },
    { name: 'Mariana B.', plan: 'Plano Mensal', city: 'Porto Alegre' }
  ]

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)]
      const id = Date.now()
      
      setNotifications(prev => [...prev, { ...randomPurchase, id }])
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id))
      }, 5000)
    }

    const timer = setInterval(showNotification, 8000)
    showNotification()

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed bottom-24 left-6 z-40 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-xl p-4 neon-border"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-neon-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-5 h-5 text-neon-green" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span className="font-semibold text-sm">{notification.name}</span>
                </div>
                <p className="text-gray-400 text-xs">
                  acabou de adquirir <span className="text-neon-green">{notification.plan}</span>
                </p>
                <p className="text-gray-500 text-xs mt-1">{notification.city}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default PurchaseNotifications
