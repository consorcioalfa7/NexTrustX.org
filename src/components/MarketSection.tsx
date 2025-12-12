'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, CreditCard, Gift } from 'lucide-react';

// Dados dos CC Consultáveis
const ccData = [
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "50.811,55", limiteTotal: "102.570,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "41.824,84", limiteTotal: "45.000,00", preco: "350,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "57.934,43", limiteTotal: "82.530,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "42.299,18", limiteTotal: "50.500,00", preco: "350,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "29.300,52", limiteTotal: "45.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "112.612,95", limiteTotal: "121.390,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "80.313,26", limiteTotal: "81.000,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "20.968,54", limiteTotal: "22.400,00", preco: "250,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "41.150,87", limiteTotal: "54.500,00", preco: "300,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "24.883,16", limiteTotal: "94.130,00", preco: "260,00", pais: "Brasil" },
  { bin: "553636", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "42.371,24", limiteTotal: "48.660,00", preco: "300,00", pais: "Brasil" },
  { bin: "523665", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "51.060,65", limiteTotal: "59.620,00", preco: "400,00", pais: "Brasil" },
  { bin: "549167", banco: "ITAU UNIBANCO, S.A.", level: "PLATINUM", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "37.662,48", limiteTotal: "40.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "549167", banco: "ITAU UNIBANCO, S.A.", level: "PLATINUM", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "39.110,89", limiteTotal: "50.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "35.346,02", limiteTotal: "66.700,00", preco: "280,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "24.051,57", limiteTotal: "35.000,00", preco: "250,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "55.826,58", limiteTotal: "94.450,00", preco: "400,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "16.478,15", limiteTotal: "21.660,00", preco: "160,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "86.656,01", limiteTotal: "91.000,00", preco: "400,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "21.375,28", limiteTotal: "28.760,00", preco: "200,00", pais: "Brasil" },
  { bin: "459080", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "PLATINUM", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "44.636,61", limiteTotal: "60.000,00", preco: "300,00", pais: "Brasil" },
  { bin: "490172", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "SIGNATURE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "38.655,56", limiteTotal: "45.000,00", preco: "280,00", pais: "Brasil" },
  { bin: "490172", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "SIGNATURE", cpf: "COM CPF", nome: "COM NOME", limiteDisponivel: "109.808,39", limiteTotal: "109.920,00", preco: "400,00", pais: "Brasil" },
  { bin: "523431", banco: "ITAU UNIBANCO, S.A.", level: "BLACK", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "40.413,76", limiteTotal: "41.160,00", preco: "300,00", pais: "Brasil" },
  { bin: "444054", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "GOLD", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "35.088,75", limiteTotal: "53.200,00", preco: "250,00", pais: "Brasil" },
  { bin: "477176", banco: "ITAU UNIBANCO HOLDING, S.A.", level: "INFINITE", cpf: "SEM CPF", nome: "COM NOME", limiteDisponivel: "21.976,58", limiteTotal: "56.410,00", preco: "250,00", pais: "Brasil" }
];

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

interface MarketSectionProps {
  onBuyClick: (product: any) => void;
}

export function MarketSection({ onBuyClick }: MarketSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('cc-consultaveis');
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
  }, [currentPage, selectedCategory]);

  const totalPages = Math.ceil(ccData.length / itemsPerPage);

  const getCategoryContent = () => {
    switch (selectedCategory) {
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
                        'bg-gray-600 text-white'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs ${item.cpf === 'COM CPF' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {item.cpf}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-green-400">{item.nome}</span>
                    </td>
                    <td className="py-3 px-2 font-mono text-xs">R$ {item.limiteDisponivel}</td>
                    <td className="py-3 px-2 font-mono text-xs">R$ {item.limiteTotal}</td>
                    <td className="py-3 px-2 font-mono text-green-400 font-bold">R$ {item.preco}</td>
                    <td className="py-3 px-2">{item.pais}</td>
                    <td className="py-3 px-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onBuyClick(item)}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-xs font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25"
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
      
      case 'cc-full':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(ccFullPrices).map(([brand, price]) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(155, 77, 255, 0.3)'
                }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300 relative overflow-hidden"
              >
                {/* Badge de Promoção */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  PROMOÇÃO
                </div>
                
                <h3 className="font-bold text-xl text-purple-400 mb-3">{brand}</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">
                  R$ {price}
                  <span className="text-sm text-gray-400 line-through ml-2">
                    R$ {Math.round(price * 1.5)}
                  </span>
                </div>
                
                {/* Detalhes do Card - Melhorados */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 flex items-center gap-2">
                      <span className="text-base">🇧🇷</span>
                      País:
                    </span>
                    <span className="text-gray-300 font-medium">Brasil</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">CPF:</span>
                    <span className="text-green-400 font-medium">✅ Completo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Nome:</span>
                    <span className="text-green-400 font-medium">✅ Completo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Número:</span>
                    <span className="text-green-400 font-medium">✅ Completo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">CVV:</span>
                    <span className="text-green-400 font-medium">✅ Completo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Validade:</span>
                    <span className="text-green-400 font-medium">✅ Completo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Banco:</span>
                    <span className="text-gray-300 font-medium">Diversos</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBuyClick({ type: 'cc-full', brand, price })}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  COMPRAR AGORA
                </motion.button>
              </motion.div>
            ))}
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
                href="https://wa.me/5516988142848"
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
                  href="https://wa.me/5516988142848"
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
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  {category.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                    className={`w-10 h-10 rounded-full font-semibold transition-all ${
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