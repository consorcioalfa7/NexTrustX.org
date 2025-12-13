'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MarketSection } from '@/components/MarketSection';
import { ExchangeSection } from '@/components/ExchangeSection';
import { LabsSection } from '@/components/LabsSection';
import { ChatAssistant } from '@/components/ChatAssistant';
import { PaymentModal } from '@/components/PaymentModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <MarketSection onBuyClick={handleBuyClick} />
      <ExchangeSection />
      <LabsSection />
      <ChatAssistant />
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        product={selectedProduct}
      />
      <Footer />
    </div>
  );
}