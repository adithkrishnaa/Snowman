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
    "hero.title": "Snowman Split & Inverter Air Conditioning Systems",
    "hero.subtitle": "Turkey's leading manufacturer of split AC, wall-mounted air conditioners, and commercial HVAC systems. Professional service with energy-efficient inverter climate solutions.",
    "hero.cta": "Download Catalog",
    "hero.contact": "Get a Quote",

    // About
    "about.title": "About Snowman Climate",
    "about.text":
      "As Snowman Climate Systems, we are one of Turkey's leading manufacturers in split air conditioning, wall-mounted AC units, and commercial HVAC systems. With our inverter technology air conditioning systems, we provide energy-efficient and eco-friendly solutions. We guarantee customer satisfaction with professional AC installation, after-sales service, and 24/7 technical support.",

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Split AC, inverter air conditioners, and commercial HVAC systems",
    "products.viewCatalog": "Download Catalog",

    // Contact
    "contact.title": "Get AC Quote & Contact",
    "contact.subtitle": "Contact us for split AC prices and product information",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Your Message (AC model, capacity, etc.)",
    "contact.send": "Request Quote",
    "contact.success": "Your request has been received! We'll get back to you soon.",
    "contact.error": "Failed to send message. Please try again.",

    // Footer
    "footer.contact": "Contact Information",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
  tr: {
    // Navigation
    "nav.about": "Hakkımızda",
    "nav.products": "Klima Ürünleri",
    "nav.contact": "İletişim",

    // Hero
    "hero.title": "Snowman Split Klima ve İnverter Klima Sistemleri",
    "hero.subtitle": "Türkiye'nin lider duvar tipi klima, split klima ve ticari klima sistemleri üreticisi. Enerji tasarruflu inverter klima çözümleri ile konforunuz için profesyonel hizmet.",
    "hero.cta": "Klima Kataloğunu İndir",
    "hero.contact": "Fiyat Teklifi Alın",

    // About
    "about.title": "Snowman Klima Hakkında",
    "about.text":
      "Snowman Climate Systems olarak, split klima, duvar tipi klima ve ticari klima sistemleri alanında Türkiye'nin önde gelen üreticilerinden biriyiz. İnverter teknolojili klima sistemlerimiz ile enerji tasarruflu ve çevre dostu çözümler sunuyoruz. Profesyonel klima montajı, satış sonrası servis ve 7/24 teknik destek ile müşteri memnuniyetini garanti ediyoruz.",

    // Products
    "products.title": "Klima Ürünlerimiz",
    "products.subtitle": "Split klima, inverter klima ve ticari klima sistemleri",
    "products.viewCatalog": "Klima Kataloğunu İndir",

    // Contact
    "contact.title": "Klima Fiyat Teklifi ve İletişim",
    "contact.subtitle": "Split klima fiyatları ve ürün bilgisi için bize ulaşın",
    "contact.name": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.phone": "Telefon",
    "contact.message": "Mesajınız (Klima modeli, kapasite vb.)",
    "contact.send": "Fiyat Teklifi İste",
    "contact.success": "Talebiniz alındı! En kısa sürede size dönüş yapacağız.",
    "contact.error": "Mesaj gönderilemedi. Lütfen tekrar deneyin.",

    // Footer
    "footer.contact": "İletişim Bilgileri",
    "footer.follow": "Sosyal Medyada Biz",
    "footer.rights": "Tüm hakları saklıdır.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export  function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en"); // Default to English

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
