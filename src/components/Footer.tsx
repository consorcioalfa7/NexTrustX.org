'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Footer() {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    // Linhas de código animadas para o efeito de fundo
    const lines = [
      'const nexTrustX = {',
      '  security: "maximum",',
      '  transparency: true,',
      '  anonymous: true,',
      '  market: "active",',
      '  exchange: "coming-soon",',
      '  labs: "innovating"',
      '};',
      '',
      'function processPayment(method) {',
      '  if (method === "PIX") {',
      '    return processInstantPayment();',
      '  } else if (method === "USDT") {',
      '    return processCryptoPayment();',
      '  }',
      '}',
      '',
      'while (true) {',
      '  innovate();',
      '  secure();',
      '  transact();',
      '}'
    ];

    setCodeLines(lines);
  }, []);

  const locations = [
    { city: 'São Paulo', country: 'Brasil', flag: '🇧🇷' },
    { city: 'Cidade do México', country: 'México', flag: '🇲🇽' },
    { city: 'Lisboa', country: 'Portugal', flag: '🇵🇹' },
    { city: 'Londres', country: 'UK', flag: '🇬🇧' },
    { city: 'Paris', country: 'França', flag: '🇫🇷' },
    { city: 'Praga', country: 'Rep. Checa', flag: '🇨🇿' }
  ];

  const contactEmails = [
    { email: 'contato@nextrustx.org', label: 'Contato Geral' },
    { email: 'market@nextrustx.org', label: 'Market' },
    { email: 'exchange@nextrustx.org', label: 'Exchange' },
    { email: 'labs@nextrustx.org', label: 'Ghost-0 Labs' }
  ];

  return (
    <footer id="contact" className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full overflow-hidden">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="font-mono text-xs text-green-400 py-1 px-4"
              style={{
                textShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              NexTrustX
            </h3>
            <p className="text-gray-400 mb-4">
              O ecossistema completo para suas necessidades digitais com segurança, transparência e inovação.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5516988142848"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-semibold text-white transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/MarianaAlvesT7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold text-white transition-colors"
              >
                Telegram
              </a>
            </div>
          </motion.div>

          {/* Contact Emails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2">
              {contactEmails.map((item, index) => (
                <motion.a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="text-xs text-purple-500">{item.label}:</span>
                  <br />
                  {item.email}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Localizações</h4>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <span className="text-lg">{location.flag}</span>
                  <div>
                    <div className="text-sm font-medium">{location.city}</div>
                    <div className="text-xs">{location.country}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 NexTrustX. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Segurança • Transparência • Inovação • Confiança
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">Sistemas Online</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Border Effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </footer>
  );
}