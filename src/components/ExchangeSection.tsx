'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "BINANCE:USDTBRL",
              "title": "$ USDT - R$ BRL"
            },
            {
              "proName": "BINANCE:BTCBRL",
              "title": "BTC - R$ BRL"
            },
            {
              "proName": "BINANCE:ETHBRL",
              "title": "ETH - R$ BRL"
            },
            {
              "proName": "BINANCE:SOLBRL",
              "title": "SOL - R$ BRL"
            },
            {
              "proName": "FX_IDC:EURBRL",
              "title": "EURO - R$ BRL"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EURO - USD"
            }
          ],
          "colorTheme": "dark",
          "locale": "br",
          "largeChartUrl": "",
          "isTransparent": true,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export function ExchangeSection() {
  return (
    <section id="exchange" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765146117/WhatsApp_Image_2025-11-25_at_12.53.40_dga20x.jpg"
                alt="Le Français"
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-500/50"
                style={{ filter: 'drop-shadow(0 0 20px rgba(155, 77, 255, 0.6))' }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              NexTrustX Market/Exchange
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-8">Plataforma crypto + marketplace + P2P</p>
        </motion.div>

        {/* TradingView Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
            <TradingViewWidget />
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="/exchange-security.jpg" 
                alt="Segurança Máxima"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Segurança Máxima</h3>
              <p className="text-gray-400">Sua segurança é nossa prioridade com criptografia avançada e proteção de dados.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="/exchange-transparency.jpg" 
                alt="Transparência Total"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Transparência Total</h3>
              <p className="text-gray-400">Operações 100% transparentes com taxas claras e sem surpresas.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="/exchange-anonymous.jpg" 
                alt="Anonimato Completo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Anonimato Completo</h3>
              <p className="text-gray-400">Sua privacidade garantida com operações completamente anônimas.</p>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Chegando em Breve</h3>
          <p className="text-gray-400 mb-6">Soluções completas de compra e venda de criptoativos</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5516988142848"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              Fale com Le Français no WhatsApp
            </a>
            <a 
              href="https://t.me/MarianaAlvesT7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Contato no Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}