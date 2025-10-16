"use client";

import useLanguage from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/Assets/product6.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useLanguage();

  const handleDownloadCatalog = () => {
    window.open('/catalog.pdf', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text */}
          <div className="space-y-8 text-left ">
            <motion.h1 
              className="text-5xl md:text-6xl font-display font-bold leading-tight text-foreground"
              variants={titleVariants}
            >
              <span className="text-primary">{t("hero.title")}</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl text-muted-foreground font-light max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleDownloadCatalog}
                  className="text-lg px-10 py-6 bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full border-0"
                >
                  <Download className="mr-3 h-6 w-6" />
                  {t("hero.cta")}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="text-lg px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  {t("hero.contact")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6"
              variants={itemVariants}
            >
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-secondary">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary-light">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Product image */}
          <motion.div 
            className="relative w-full h-[360px] md:h-[520px]"
            variants={itemVariants}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/10 blur-3xl" />
            <div className="absolute inset-0 rounded-3xl" />
            <div className="relative w-full h-full">
              <Image
                src={heroImage}
                alt="Snowman Premium Product"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center p-2 hover:border-primary-light transition-colors"
          whileHover={{ borderColor: "#77E17B" }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
