'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, CreditCard, Gift } from 'lucide-react';
import { ccData, CCConsultavel } from '@/data/ccData';

const ccFullPrices = {
  "AMEX": 75,
  "BLACK": 60,
  "BUSINESS": 45,
  "CLASSIC": 15,
  "CORPORATE": 52,
  "ELO": 22,
  "GOLD": 18,
  "INDEFINIDO": 30,
  "INFINITE": 52,
  "NUBANK BLACK": 75,
  "PLATINUM": 30,
  "PREPAID": 8,
  "STANDARD": 18
};

// Componente para mini cartão de crédito estilizado
const MiniCreditCard = ({ brand }: { brand: string }) => {
  const getCardColors = (brand: string) => {
    switch (brand.toUpperCase()) {
      case 'AMEX':
        return 'from-blue-600 to-blue-800';
      case 'BLACK':
        return 'from-gray-900 to-black';
      case 'INFINITE':
        return 'from-gray-900 to-gray-700';
      case 'PLATINUM':
        return 'from-gray-400 to-gray-600';
      case 'GOLD':
        return 'from-yellow-500 to-yellow-700';
      case 'NUBANK BLACK':
        return 'from-purple-800 to-purple-900';
      default:
        return 'from-gray-700 to-gray-900';
    }
  };

  const getCardBrand = (brand: string) => {
    switch (brand.toUpperCase()) {
      case 'AMEX':
        return 'AMEX';
      case 'BLACK':
        return 'BLACK';
      case 'INFINITE':
        return '∞';
      case 'PLATINUM':
        return 'PLAT';
      case 'GOLD':
        return 'GOLD';
      case 'NUBANK BLACK':
        return 'NU';
      default:
        return brand.substring(0, 4).toUpperCase();
    }
  };

  return (
    <div className={`relative w-12 h-8 bg-gradient-to-br ${getCardColors(brand)} rounded-md shadow-lg overflow-hidden border border-gray-700`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
      <div className="absolute top-1 left-1 text-white text-[6px] font-bold">
        {getCardBrand(brand)}
      </div>
      <div className="absolute bottom-0 right-1 text-white/60 text-[4px]">
        ••••
      </div>
    </div>
  );
};

interface MarketSectionProps {
  onBuyClick: (product: any) => void;
}

export function MarketSection({ onBuyClick }: MarketSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('cc-full');
  const itemsPerPage = 10;

  const categories = [
    { id: 'cc-full', name: 'CC Full', icon: CreditCard },
    { id: 'cc-consultaveis', name: 'CC Consultáveis', icon: CreditCard },
    { id: 'gift-cards', name: 'Gift Cards', icon: Gift },
    { id: 'outros', name: 'Outros', icon: ShoppingCart }
  ];

  const filteredData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    if (selectedCategory === 'cc-consultaveis') {
      return ccData.slice(startIndex, endIndex);
    }
    return [];
  }, [currentPage, selectedCategory, itemsPerPage]);

  const totalPages = Math.ceil(ccData.length / itemsPerPage);

  const getCategoryContent = () => {
    switch (selectedCategory) {
      case 'cc-full':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(ccFullPrices).map(([brand, price]) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(155, 77, 255, 0.3)'
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                  {/* Header com cartão */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
                    <div className="flex items-center gap-3">
                      <MiniCreditCard brand={brand} />
                      <div>
                        <h3 className="text-lg font-bold text-white">{brand}</h3>
                        <p className="text-xs text-gray-400">Cartão Completo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 line-through">R$ {Math.round(price * 1.5)}</p>
                      <p className="text-xl font-bold text-green-400">R$ {price}</p>
                    </div>
                  </div>

                  {/* Conteúdo principal */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-800/30 rounded-lg p-2">
                        <p className="text-xs text-gray-400">CPF</p>
                        <p className="text-sm font-semibold text-green-400">✅ Completo</p>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-2">
                        <p className="text-xs text-gray-400">Nome</p>
                        <p className="text-sm font-semibold text-green-400">✅ Completo</p>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-2">
                        <p className="text-xs text-gray-400">Número</p>
                        <p className="text-sm font-semibold text-green-400">✅ Completo</p>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-2">
                        <p className="text-xs text-gray-400">CVV</p>
                        <p className="text-sm font-semibold text-green-400">✅ Completo</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onBuyClick({ type: 'cc-full', brand, price })}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Comprar Agora
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'cc-consultaveis':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-3 px-2">BIN</th>
                  <th className="text-left py-3 px-2">Banco</th>
                  <th className="text-left py-3 px-2">Level</th>
                  <th className="text-left py-3 px-2">CPF</th>
                  <th className="text-left py-3 px-2">Nome</th>
                  <th className="text-left py-3 px-2">Limite Disp.</th>
                  <th className="text-left py-3 px-2">Limite Total</th>
                  <th className="text-left py-3 px-2">Preço</th>
                  <th className="text-left py-3 px-2">País</th>
                  <th className="text-left py-3 px-2">Ação</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800 hover:bg-purple-500/10 transition-colors"
                  >
                    <td className="py-3 px-2 font-mono">{item.bin}</td>
                    <td className="py-3 px-2 text-xs">{item.banco}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.level === 'BLACK' ? 'bg-gray-800 text-white' :
                        item.level === 'PLATINUM' ? 'bg-gray-300 text-gray-900' :
                        item.level === 'INFINITE' ? 'bg-purple-600 text-white' :
                        item.level === 'SIGNATURE' ? 'bg-yellow-600 text-white' :
                        item.level === 'GOLD' ? 'bg-yellow-500 text-gray-900' :
                        'bg-gray-700 text-white'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs ${
                        item.cpf === 'COM CPF' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {item.cpf}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs ${
                        item.nome === 'COM NOME' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {item.nome}
                      </span>
                    </td>
                    <td className="py-3 px-2 font-mono text-xs">{item.limiteDisponivel}</td>
                    <td className="py-3 px-2 font-mono text-xs">{item.limiteTotal}</td>
                    <td className="py-3 px-2 font-mono text-green-400 font-bold">{item.preco}</td>
                    <td className="py-3 px-2">{item.pais}</td>
                    <td className="py-3 px-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onBuyClick(item)}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-xs font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                      >
                        COMPRAR
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'gift-cards':
        return (
          <div className="text-center py-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <img 
                  src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765146117/Razer_Gold_bn1uc7.png"
                  alt="Razer Gold"
                  className="w-40 h-40 mx-auto mb-4 rounded-xl shadow-lg shadow-purple-500/20"
                />
                <h3 className="text-xl font-bold text-purple-400 mb-2">Razer Gold</h3>
                <p className="text-gray-400">Gift Card para jogos</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765146118/1743081473-google-play-640w_skwql8.avif"
                  alt="Google Play"
                  className="w-40 h-40 mx-auto mb-4 rounded-xl shadow-lg shadow-purple-500/20"
                />
                <h3 className="text-xl font-bold text-purple-400 mb-2">Google Play</h3>
                <p className="text-gray-400">Gift Card para Android</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Compramos Gift Cards a 50% do valor</h3>
            <p className="text-gray-400 mb-6">Razor Gold, Google Play e outros</p>
            
            <div className="flex gap-4 justify-center">
              <a 
                href="https://wa.me/551698814284"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/MarianaAlvesT7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://res.cloudinary.com/dhwqfkhzm/image/upload/v1765512980/A_Complete_Path_For_The_Successful_E-Commerce_Business_zpykkn.jpg"
                alt="Em Breve"
                className="w-full max-w-md mx-auto mb-8 rounded-xl shadow-2xl shadow-purple-500/20"
              />
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Em Breve</h3>
              <p className="text-gray-400 mb-6">Novos produtos e serviços chegando...</p>
              
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://wa.me/551698814284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-white transition-colors"
                >
                  Fique por Dentro
                </a>
                <a 
                  href="https://t.me/MarianaAlvesT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-colors"
                >
                  Novidades
                </a>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="market" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Market Consórcio Alfa7
            </h2>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-16 h-16 rounded-full object-cover"
              style={{ filter: 'drop-shadow(0 0 10px rgba(155, 77, 255, 0.6))' }}
            >
              <source 
                src="https://res.cloudinary.com/dhwqfkhzm/video/upload/v1765146117/WhatsApp_Video_2025-11-26_at_09.20.43_tsmqio.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
          <p className="text-gray-400 text-lg">Os melhores produtos digitais com segurança e confiança</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <Icon size={18} className="group-hover:text-purple-400 transition-colors" />
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900/30 rounded-xl border border-purple-500/20 p-6 mb-6 min-h-[400px]"
        >
          {getCategoryContent()}
        </motion.div>

        {/* Pagination */}
        {selectedCategory === 'cc-consultaveis' && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <motion.button
                    key={pageNum}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                );
              })}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}