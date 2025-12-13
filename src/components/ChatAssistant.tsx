'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou Mariana Alves, sua assistente virtual NexTrustX. Como posso ajudar você hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
      return 'Nossos preços variam conforme o produto. No Market Consórcio Alfa7, os CC Consultáveis começam a partir de R$ 300,00. Para Gift Cards, compramos a 50% do valor nominal. Para valores específicos, consulte nossa tabela ou fale diretamente com um atendente!';
    }
    
    if (lowerMessage.includes('comprar') || lowerMessage.includes('compra')) {
      return 'Para fazer uma compra, você pode selecionar o produto desejado em nosso Market e clicar no botão COMPRAR. Aceitamos PIX e USDT (TRC20) como formas de pagamento. Também pode falar diretamente conosco via WhatsApp +55 16 98814-2848.';
    }
    
    if (lowerMessage.includes('pagamento') || lowerMessage.includes('pix') || lowerMessage.includes('usdt')) {
      return 'Aceitamos PIX (com link direto para pagamento) e USDT na rede TRON (TRC20). Após selecionar o produto, você será direcionado para nossa página de pagamento segura onde poderá escolher a melhor opção para você.';
    }
    
    if (lowerMessage.includes('seguro') || lowerMessage.includes('segurança') || lowerMessage.includes('confiável')) {
      return 'A NexTrustX prioriza sua segurança com criptografia avançada, operações transparentes e anonimato completo. Todos os nossos processos são desenvolvidos com as melhores práticas de segurança do mercado.';
    }
    
    if (lowerMessage.includes('crypto') || lowerMessage.includes('bitcoin') || lowerMessage.includes('exchange')) {
      return 'Nossa plataforma Exchange está em desenvolvimento! Em breve você poderá comprar e vender criptoativos de forma segura, transparente e anônima. Enquanto isso, posso ajudar com informações sobre nossos outros serviços.';
    }
    
    if (lowerMessage.includes('ghost-0') || lowerMessage.includes('labs') || lowerMessage.includes('desenvolvimento')) {
      return 'Ghost-0 Labs é nosso laboratório de desenvolvimento! Criamos soluções personalizadas como APIs de pagamento, Bots Telegram, Web Scrapers, integrações com IA e muito mais. Tem um projeto em mente? Podemos conversar sobre ele!';
    }
    
    if (lowerMessage.includes('contato') || lowerMessage.includes('whatsapp') || lowerMessage.includes('telegram')) {
      return 'Você pode nos contatar via WhatsApp +55 16 98814-2848 ou Telegram @MarianaAlvesT7. Também estou aqui para ajudar com suas dúvidas 24/7!';
    }
    
    return 'Entendi! Para informações mais detalhadas sobre produtos específicos ou para realizar uma compra, recomendo falar diretamente com nossa equipe via WhatsApp ou Telegram. Posso ajudar com mais alguma dúvida geral?';
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/25 flex items-center justify-center border-2 border-purple-400"
      >
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-12 h-12 rounded-full object-cover"
            style={{ filter: 'brightness(1.2) contrast(1.1)' }}
          >
            <source 
              src="https://res.cloudinary.com/dhwqfkhzm/video/upload/v1765491438/document_5028434353084958094_sgtjpt.mp4" 
              type="video/mp4" 
            />
          </video>
          <MessageCircle className="absolute -bottom-1 -right-1 w-4 h-4 text-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-[416px] h-[650px] bg-gray-900 rounded-xl shadow-2xl shadow-purple-500/20 border border-purple-500/30 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                  >
                    <source 
                      src="https://res.cloudinary.com/dhwqfkhzm/video/upload/v1765491438/document_5028434353084958094_sgtjpt.mp4" 
                      type="video/mp4" 
                    />
                  </video>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Mariana Alves</h3>
                  <p className="text-white/80 text-xs">Assistente NexTrustX</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-purple-600 ml-2' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 mr-2'
                    }`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-200 border border-purple-500/20'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mr-2 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-gray-800 rounded-2xl px-4 py-2 border border-purple-500/20">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-800 border border-purple-500/30 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!inputText.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}