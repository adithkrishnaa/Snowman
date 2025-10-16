"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Premium Quality Products",
    "hero.subtitle": "Your trusted partner for excellence and innovation",
    "hero.cta": "View Catalog",
    "hero.contact": "Contact Us",

    // About
    "about.title": "About Us",
    "about.text":
      "We are dedicated to providing the highest quality products and exceptional service to our valued customers. With years of experience in the industry, we have built a reputation for reliability, innovation, and excellence. Our commitment to quality and customer satisfaction drives everything we do.",

    // Products
    "products.title": "Featured Products",
    "products.subtitle": "Discover our selection of premium products",
    "products.viewCatalog": "Download Full Catalog",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have questions? We'd love to hear from you",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "Failed to send message. Please try again.",

    // Footer
    "footer.contact": "Contact Information",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
  tr: {
    // Navigation
    "nav.about": "Hakkımızda",
    "nav.products": "Ürünler",
    "nav.contact": "İletişim",

    // Hero
    "hero.title": "Premium Kalite Ürünler",
    "hero.subtitle": "Mükemmellik ve yenilik için güvenilir ortağınız",
    "hero.cta": "Kataloğu Görüntüle",
    "hero.contact": "Bize Ulaşın",

    // About
    "about.title": "Hakkımızda",
    "about.text":
      "Değerli müşterilerimize en kaliteli ürünleri ve olağanüstü hizmeti sunmaya kendimizi adadık. Sektördeki yıllarca deneyimimiz ile güvenilirlik, yenilik ve mükemmellik konusunda bir itibar oluşturduk. Kalite ve müşteri memnuniyeti taahhüdümüz yaptığımız her şeyi yönlendirir.",

    // Products
    "products.title": "Öne Çıkan Ürünler",
    "products.subtitle": "Premium ürün seçimimizi keşfedin",
    "products.viewCatalog": "Tam Kataloğu İndir",

    // Contact
    "contact.title": "İletişime Geçin",
    "contact.subtitle": "Sorularınız mı var? Sizden haber almak isteriz",
    "contact.name": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.phone": "Telefon",
    "contact.message": "Mesaj",
    "contact.send": "Mesaj Gönder",
    "contact.success": "Mesaj başarıyla gönderildi!",
    "contact.error": "Mesaj gönderilemedi. Lütfen tekrar deneyin.",

    // Footer
    "footer.contact": "İletişim Bilgileri",
    "footer.follow": "Bizi Takip Edin",
    "footer.rights": "Tüm hakları saklıdır.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export  function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
