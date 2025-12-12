'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, CreditCard, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    contactType: 'whatsapp',
    paymentMethod: 'pix'
  });
  const [copied, setCopied] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const usdtAddress = 'TELfDE15DfT1dsfVUtQbC3aXLVtKmyKFq1';
  const waContact = '+5516988142848';
  const tgContact = '@MarianaAlvesT7';

  useEffect(() => {
    if (product?.price) {
      setFormData(prev => ({ ...prev }));
    }
  }, [product]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(usdtAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePaymentComplete = () => {
    setIsPaid(true);
    
    // Preparar mensagem para WhatsApp
    const message = encodeURIComponent(
      `*NOVO PEDIDO - NexTrustX*\n\n` +
      `*Produto:* ${product?.type === 'cc-full' ? `CC Full - ${product.brand}` : `CC Consultável - BIN ${product?.bin}`}\n` +
      `*Valor:* R$ ${product?.price || product?.preco}\n\n` +
      `*Dados do Cliente:*\n` +
      `*Nome:* ${formData.name || 'Não informado'}\n` +
      `*Contato:* ${formData.contact}\n` +
      `*Tipo:* ${formData.contactType === 'whatsapp' ? 'WhatsApp' : formData.contactType === 'telegram' ? 'Telegram' : 'Email'}\n` +
      `*Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX' : 'USDT TRC20'}\n\n` +
      `*Status:* Pagamento realizado ✅`
    );
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${waContact.replace(/[^\d]/g, '')}?text=${message}`, '_blank');
    
    // Fechar modal após 3 segundos
    setTimeout(() => {
      onClose();
      setIsPaid(false);
      setFormData({
        name: '',
        contact: '',
        contactType: 'whatsapp',
        paymentMethod: 'pix'
      });
    }, 3000);
  };

  const getPixLink = () => {
    const price = product?.price || product?.preco || '0';
    // Substituir vírgula por ponto para o link PIX
    const formattedPrice = price.replace(',', '.');
    return `https://pix.nextrustx.com/pagar/${formattedPrice}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-xl border border-purple-500/30 max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-t-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Finalizar Compra</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {product && (
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/80 text-sm mb-1">
                  {product?.type === 'cc-full' ? 'CC Full' : 'CC Consultável'}
                </p>
                <p className="text-2xl font-bold text-white">
                  {product?.type === 'cc-full' ? product.brand : `${product?.banco} - ${product?.level}`}
                </p>
                <p className="text-xl font-semibold text-green-300 mt-2">
                  R$ {product?.price || product?.preco}
                </p>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            {/* Dados Pessoais */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Seus Dados</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome ou Vulgo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                    placeholder="Seu nome (opcional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contato Preferido
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.contactType}
                      onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                      className="bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/60 transition-colors"
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="telegram">Telegram</option>
                      <option value="email">Email</option>
                    </select>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="flex-1 bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                      placeholder={formData.contactType === 'whatsapp' ? '+55 XX XXXXX-XXXX' : formData.contactType === 'telegram' ? '@username' : 'email@exemplo.com'}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Método de Pagamento */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Método de Pagamento</h3>
              
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'pix' })}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    formData.paymentMethod === 'pix'
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                    <div className="text-left">
                      <p className="font-semibold text-white">PIX</p>
                      <p className="text-sm text-gray-400">Pagamento instantâneo</p>
                    </div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'usdt' })}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    formData.paymentMethod === 'usdt'
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    <div className="text-left">
                      <p className="font-semibold text-white">USDT TRC20</p>
                      <p className="text-sm text-gray-400">Criptomoeda</p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Payment Details */}
            {formData.paymentMethod === 'pix' ? (
              <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
                <h4 className="font-semibold text-white mb-3">Link de Pagamento PIX</h4>
                <a
                  href={getPixLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Pagar com PIX
                </a>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Você será redirecionado para a página de pagamento segura
                </p>
              </div>
            ) : (
              <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
                <h4 className="font-semibold text-white mb-3">Endereço USDT TRC20</h4>
                <div className="flex gap-2">
                  <div className="flex-1 bg-black rounded-lg px-3 py-2 font-mono text-sm text-gray-300 break-all">
                    {usdtAddress}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyAddress}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                  >
                    {copied ? <Check size={20} className="text-white" /> : <Copy size={20} className="text-white" />}
                  </motion.button>
                </div>
                <p className="text-xs text-yellow-400 mt-2">
                  ⚠️ Atenção: Envie apenas na rede TRON (TRC20)
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Valor a pagar: <span className="text-green-400 font-semibold">${(parseFloat(product?.price || product?.preco || '0') / 5.5).toFixed(2)} USDT</span> (aproximado)
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePaymentComplete}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                {isPaid ? '✅ Pedido Enviado!' : 'Pagamento Realizado'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full px-6 py-3 border border-gray-600 text-gray-400 rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Cancelar
              </motion.button>
            </div>

            {/* Info */}
            <div className="text-center text-xs text-gray-500">
              <p>Após o pagamento, enviaremos seu pedido para:</p>
              <p>WhatsApp: {waContact} | Telegram: {tgContact}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}