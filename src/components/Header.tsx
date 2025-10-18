import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import snowmanLogo from "@/Assets/logog.png";
import Image from "next/image";
import useLanguage from "@/lib/language-context";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const navItems = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.products"), id: "products" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-md shadow-lg border-b border-primary/50 mt-2 mx-4 lg:mx-40 rounded-full"
          : "bg-transparent px-2 lg:px-20 mt-1"
      }`}>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}>
            <Image
              src={snowmanLogo}
              alt="Snowman AC Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-display font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
              Snowman
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}

            {/* Language Toggle */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium">
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "TR" : "EN"}</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-light text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {language === "en" ? "Get Quote" : "Teklif Al"}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary/10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-3 border-b border-gray-100 last:border-b-0">
                  {item.label}
                </button>
              ))}

              {/* Language Toggle for Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium w-fit">
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "Türkçe" : "English"}</span>
              </button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-light text-white rounded-full w-full mt-4">
                {language === "en" ? "Get Quote" : "Teklif Al"}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
