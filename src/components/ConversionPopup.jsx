import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, ArrowRight } from 'lucide-react'

const ConversionPopup = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          className="glass-strong rounded-2xl p-8 max-w-md w-full relative neon-border"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-neon-green" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              🎁 Oferta Exclusiva!
            </h3>

            <p className="text-gray-400 mb-6">
              Ganhe <span className="text-neon-green font-bold">50% OFF</span> no seu primeiro plano! 
              Esta oferta expira em breve.
            </p>

            <div className="bg-dark-card rounded-xl p-4 mb-6">
              <div className="text-gray-500 line-through text-sm mb-1">De: R$ 199,90</div>
              <div className="text-3xl font-black text-neon-green">R$ 99,90</div>
              <div className="text-gray-400 text-sm">Plano Mensal</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-neon-green text-black font-bold py-4 rounded-xl hover:bg-neon-greenDark transition-all neon-border flex items-center justify-center gap-2 mb-4"
            >
              QUERO ESSE DESCONTO
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Não, obrigado
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ConversionPopup
