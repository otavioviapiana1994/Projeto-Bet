import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Instagram, Send, MessageCircle, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Shield className="w-10 h-10 text-neon-green" />
              <span className="text-3xl font-bold">
                ESPORTES<span className="text-neon-green neon-text">RETRÔ</span>
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              A melhor plataforma de análises esportivas do Brasil. Análises profissionais, 
              consistência comprovada e resultados reais. Junte-se a milhares de apostadores 
              que já estão lucrando.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-gray-400 hover:text-neon-green transition-colors">Planos</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-neon-green transition-colors">Resultados</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-neon-green transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-neon-green transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3 text-gray-400 text-sm max-w-2xl">
              <Shield className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
              <p>
                <strong>Aviso Legal:</strong> Apostas esportivas envolvem riscos. Jogue com responsabilidade. 
                Este site é apenas para fins informativos e não garante lucros. 
                Aposte apenas o que você pode perder. +18 anos.
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 EsportesRetrô. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
