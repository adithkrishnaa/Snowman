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
    "hero.subtitle":
      "Turkey's leading manufacturer of split AC, wall-mounted air conditioners, and commercial HVAC systems. Professional service with energy-efficient inverter climate solutions.",
    "hero.cta": "Download Catalog",
    "hero.contact": "Get a Quote",

    // About
    "about.title": "About Snowman ",
    "about.text":
      "As Snowman Climate Systems, we are one of Turkey's leading manufacturers in split air conditioning, wall-mounted AC units, and commercial HVAC systems. With our inverter technology air conditioning systems, we provide energy-efficient and eco-friendly solutions. We guarantee customer satisfaction with professional AC installation, after-sales service, and 24/7 technical support.",
    "about.per": "Premium Quality",
    "about.pertext":
      "We maintain the highest standards in every product, ensuring exceptional quality and durability that exceeds expectations.",
    "about.couf": "Customer Focus",
    "about.couftext":
      "Your satisfaction is our top priority. We provide personalized service and support to meet your unique needs.",
    "about.inov": "Innovation",
    "about.inovtext":
      "Leading the industry with cutting-edge solutions and innovative approaches to meet modern challenges.",
    ourversion: "Our Mission",
    "ourmis.text":
      " To deliver exceptional products and services that exceed customer expectations while maintaining the highest standards of quality, innovation, and reliability in everything we do.",
    Product: "Products",
    Years: "Years",
    Support: "Support",
    Reliability: "Reliability",
    Excellence: "Excellence",
    Partnership: "Partnership",
    "reliability.text":
      "Consistent quality and dependable service you can trust.",
    "exce.text": "Striving for perfection in every product and interaction.",
    "part.text": "Building lasting relationships with our valued customers.",
    

    // Products
    "products.title": "Our Products",
    "products.subtitle":
      "Split AC, inverter air conditioners, and commercial HVAC systems",
    "products.viewCatalog": "Download Catalog",
    "products.premiumClimate": "Premium Climate Solutions",
    "products.description":
      "Split AC, inverter air conditioners, and commercial HVAC systems - Advanced climate control solutions for your living and working spaces",
    "products.premium": "Premium",
    "products.viewDetails": "View Details",
    "products.exploreRange": "Explore Our Complete Range",
    "products.catalogDescription":
      "Download our comprehensive catalog to discover all our premium products, specifications, and exclusive offers",
    "products.fullCatalog": "Full Catalog Available",
    "products.premiumQuality": "Premium Quality",
    "products.certifiedProducts": "Certified Products",
    "products.extendedWarranty": "Extended Warranty",
    "products.upToYears": "Up to 5 Years",
    "products.fastService": "Fast Service",
    "products.quickInstallation": "Quick Installation",
    "products.countries": "Countries",

    // Contact
    "contact.title": "Get AC Quote & Contact",
    "contact.subtitle":
      "Contact us for split AC prices and product information",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Your Message (AC model, capacity, etc.)",
    "contact.send": "Request Quote",
    "contact.success":
      "Your request has been received! We'll get back to you soon.",
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
    "hero.subtitle":
      "Türkiye'nin lider duvar tipi klima, split klima ve ticari klima sistemleri üreticisi. Enerji tasarruflu inverter klima çözümleri ile konforunuz için profesyonel hizmet.",
    "hero.cta": "Kataloğu İndir",
    "hero.contact": "Fiyat Teklifi Alın",

    // About
    "about.title": "Snowman Klima ",
    "about.text":
      "Snowman Climate Systems olarak, split klima, duvar tipi klima ve ticari klima sistemleri alanında Türkiye'nin önde gelen üreticilerinden biriyiz. İnverter teknolojili klima sistemlerimiz ile enerji tasarruflu ve çevre dostu çözümler sunuyoruz. Profesyonel klima montajı, satış sonrası servis ve 7/24 teknik destek ile müşteri memnuniyetini garanti ediyoruz.",
    "about.per": "Üstün Kalite",
    "about.pertext":
      "Her üründe en yüksek standartları koruyor, beklentileri aşan olağanüstü kalite ve dayanıklılık sağlıyoruz.",
    "about.couf": "Müşteri Odaklılık",
    "about.couftext":
      "Memnuniyetiniz bizim için en önemli önceliktir. Özel ihtiyaçlarınızı karşılamak için kişiselleştirilmiş hizmet ve destek sağlıyoruz.",
    "about.inov": "Yenilik",
    "about.inovtext":
      "Modern zorlukların üstesinden gelmek için ileri düzey çözümler ve yenilikçi yaklaşımlarla sektöre öncülük ediyoruz.",
    ourversion: "Misyonumuz",
    "ourmis.text":
      "Yaptığımız her şeyde en yüksek kalite, yenilikçilik ve güvenilirlik standartlarını korurken, müşteri beklentilerini aşan olağanüstü ürün ve hizmetler sunmak.",
    Product: "Ürün",
    Years: "Yıl",
    Support: "Destek",
    Reliability: "Güvenilirlik",
    Excellence: "Mükemmellik",
    Partnership: "ortaklık",
    "reliability.text": "Güvenebileceğiniz tutarlı kalite ve güvenilir hizmet.",
    "exce.text":
      "Her üründe ve etkileşimde mükemmelliğe ulaşmak için çabalıyoruz.",
    "part.text": "Değerli müşterilerimizle kalıcı ilişkiler kurmak istiyoruz.",

    // Products
    "products.title": "Klima Ürünlerimiz",
    "products.subtitle":
      "Split klima, inverter klima ve ticari klima sistemleri",
    "products.viewCatalog": "Klima Kataloğunu İndir",
    "products.premiumClimate": "Premium İklim Çözümleri",
    "products.description":
      "Split klima, inverter klima ve ticari klima sistemleri - Yaşam ve çalışma alanlarınız için gelişmiş iklim kontrol çözümleri",
    "products.premium": "Premium",
    "products.viewDetails": "Detayları Görüntüle",
    "products.exploreRange": "Komple Ürün Yelpazemizi Keşfedin",
    "products.catalogDescription":
      "Tüm premium ürünlerimizi, teknik özelliklerini ve özel tekliflerimizi keşfetmek için kapsamlı kataloğumuzu indirin",
    "products.fullCatalog": "Tam Katalog Mevcut",
    "products.premiumQuality": "Premium Kalite",
    "products.certifiedProducts": "Sertifikalı Ürünler",
    "products.extendedWarranty": "Uzatılmış Garanti",
    "products.upToYears": "5 Yıla Kadar",
    "products.fastService": "Hızlı Servis",
    "products.quickInstallation": "Hızlı Kurulum",
    "products.countries": "Ülke",

    // Contact
    "contact.title": "Klima Fiyat Teklifi ve İletişim",
    "contact.subtitle":
      "Split klima fiyatları ve ürün bilgisi için bize ulaşın",
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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr"); // Default to English

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
