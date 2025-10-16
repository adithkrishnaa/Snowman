import useLanguage from "@/lib/language-context";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Download } from "lucide-react";

export const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
  ];

  const handleDownloadCatalog = () => {
    window.open('/catalog.pdf', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">
                  Snowmann
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-300">contact@snowmann.net</p>
                    <p className="text-sm text-gray-400">
                      {language === 'en' ? 'Email Support' : 'E-posta Desteği'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-gray-300">+90 505 856 20 02</p>
                    <p className="text-sm text-gray-400">
                      {language === 'en' ? 'WhatsApp Support' : 'WhatsApp Desteği'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-light/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-light" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      {language === 'en' ? 'Turkey' : 'Türkiye'}
                    </p>
                    <p className="text-sm text-gray-400">
                      {language === 'en' ? 'Headquarters' : 'Genel Merkez'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">
                {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left">
                    {t("nav.about")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left">
                    {t("nav.products")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left">
                    {t("nav.contact")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDownloadCatalog}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>
                      {language === 'en' ? 'Download Catalog' : 'Katalog İndir'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">
                {language === 'en' ? 'Follow Us' : 'Bizi Takip Edin'}
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 ${social.color} transform hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <h5 className="font-semibold text-white mb-3">
                  {language === 'en' ? 'Stay Updated' : 'Güncel Kalın'}
                </h5>
                <p className="text-gray-300 text-sm mb-4">
                  {language === 'en' 
                    ? 'Get the latest news and product updates.'
                    : 'En son haberler ve ürün güncellemelerini alın.'
                  }
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium">
                  {language === 'en' ? 'Subscribe' : 'Abone Ol'}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>
                  © {new Date().getFullYear()} Snowmann. {t("footer.rights")}
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors duration-300">
                  {language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors duration-300">
                  {language === 'en' ? 'Terms of Service' : 'Hizmet Şartları'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
