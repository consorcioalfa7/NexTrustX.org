'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, CreditCard, TrendingUp, Code } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <motion.section 
      id="home"
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.4) contrast(1.2)',
          }}
        >
          <source 
            src="https://res.cloudinary.com/dhwqfkhzm/video/upload/v1765146117/WhatsApp_Video_2025-11-26_at_09.20.45_dnfhgx.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            NexTrustX
          </h1>
          
          <div className="space-y-2 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-light text-center">
              "Três mundos. Uma só plataforma."
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light text-center">
              "Finanças, Crypto e Tecnologia — conectados para você."
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light text-center">
              "Digital, seguro, imediato. O futuro em um só lugar."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CreditCard size={20} />
              Explorar Market
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => document.getElementById('exchange')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp size={20} />
              Exchange
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
              style={{ fontFamily: 'Courier New, monospace' }}
              onClick={() => document.getElementById('labs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code size={20} />
              Ghost-0 Labs
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </motion.div>

      {/* Neon Border Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>
    </motion.section>
  );
}