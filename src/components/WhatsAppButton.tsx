"use client";

import { MessageCircle } from "lucide-react";
import useLanguage from "@/lib/language-context";
import { useLoading } from "@/lib/loading-context";

const WHATSAPP_NUMBER = "905058562002";

export const WhatsAppButton = () => {
  const { language } = useLanguage();
  const { isLoading } = useLoading();

  if (isLoading) return null;

  const handleClick = () => {
    const message = encodeURIComponent(
      language === 'en' 
        ? "Hello! I'm interested in your products and services. Could you please provide more information?"
        : "Merhaba! Ürün ve hizmetlerinizle ilgileniyorum. Daha fazla bilgi alabilir miyim?"
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
      aria-label={language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp ile Sohbet Et'}
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {language === 'en' ? 'Chat with us!' : 'Bizimle sohbet edin!'}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};
