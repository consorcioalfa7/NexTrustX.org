'use client';

import { motion } from 'framer-motion';
import { Menu, X, CreditCard, TrendingUp, Code, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      'const nexTrustX = () => {',
      '  return { security: true,',
      '           transparency: true,',
      '           innovation: true }',
      '};',
      '',
      'while (true) {',
      '  innovate();',
      '  secure();',
      '  transact();',
      '}'
    ];
    setCodeLines(lines);
  }, []);

  const menuItems = [
    { label: 'Market', href: '#market', icon: CreditCard },
    { label: 'Exchange', href: '#exchange', icon: TrendingUp },
    { label: 'Labs', href: '#labs', icon: Code },
    { label: 'Contato', href: '#contact', icon: MessageSquare }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20 overflow-hidden"
    >
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full overflow-hidden">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="font-mono text-xs text-green-400 py-1 px-4 whitespace-nowrap"
              style={{
                textShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo 3D */}
          <motion.div 
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <img 
                src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1762880113/NexTrustX_Logo_n29ku9.png"
                alt="NexTrustX"
                className="w-full h-full object-contain rounded-full"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(155, 77, 255, 0.6))',
                }}
              />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium group"
                  style={{
                    textShadow: '0 0 10px rgba(155, 77, 255, 0)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 10px rgba(155, 77, 255, 0.8)',
                  }}
                >
                  <Icon size={18} className="group-hover:text-purple-400 transition-colors" />
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 relative z-10"
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}