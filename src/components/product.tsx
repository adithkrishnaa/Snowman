"use client";

import {
  Download,
  Package,
  Star,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Award, Users, Target, CheckCircle, Globe } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Product1 from "../Assets/product3.jpg";
import Product2 from "../Assets/product14.png";
import Product3 from "../Assets/product5.jpg";
import Product4 from "../Assets/product15.png";
import Product5 from "../Assets/product8.png";
import Product6 from "../Assets/product11.png";
import { StaggeredChildren } from "./AnimatedSection";
import useLanguage from "@/lib/language-context";

const products = [
  {
    id: 1,
    name: "Split Air Conditioning Systems",
    nameTr: "Split Klima Sistemleri",
    description:
      "Energy-efficient wall-mounted split AC solutions for homes and offices",
    descriptionTr: "Ev ve ofisler için enerji tasarruflu duvar tipi split klima çözümleri",
    features: ["A++ Energy Class", "WiFi Control", "5 Year Warranty"],
    featuresTr: ["A++ Enerji Sınıfı", "WiFi Kontrol", "5 Yıl Garanti"],
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    accentColor: "bg-blue-500",
    icon: "❄️",
    image: Product1,
    price: "₺12,000",
    brand: "Snowman",
    category: "Split AC",
    categoryTr: "Split Klima",
  },
  {
    id: 2,
    name: "Solar Inverter Air Conditioner",
    nameTr: "Solar İnverter Klima",
    description: "Solar powered inverter AC - Maximum energy savings",
    descriptionTr: "Güneş enerjili inverter klima - Maksimum enerji tasarrufu",
    features: ["Solar Panel Integrated", "Inverter Technology", "Eco-Friendly"],
    featuresTr: ["Solar Panel Entegre", "İnverter Teknoloji", "Eco-Friendly"],
    gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    accentColor: "bg-purple-500",
    icon: "🏢",
    image: Product2,
    price: "₺25,000",
    brand: "Snowman",
    category: "Inverter AC",
    categoryTr: "İnverter Klima",
  },
  {
    id: 3,
    name: "Central Air Conditioning Systems",
    nameTr: "Merkezi Klima Sistemleri",
    description: "Advanced central AC solutions for commercial buildings",
    descriptionTr: "Ticari binalar için gelişmiş merkezi klima çözümleri",
    features: ["Smart Control", "Voice Command", "Energy Reports"],
    featuresTr: ["Akıllı Kontrol", "Sesli Komut", "Enerji Raporları"],
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    accentColor: "bg-emerald-500",
    icon: "🎛️",
    image: Product3,
    price: "₺45,000",
    brand: "Snowman",
    category: "Commercial HVAC",
    categoryTr: "Ticari Klima",
  },
  {
    id: 4,
    name: "DC Inverter Heat Pump",
    nameTr: "DC İnverter Isı Pompası",
    description: "High efficiency inverter system for both heating and cooling",
    descriptionTr: "Hem ısıtma hem soğutma için yüksek verimli inverter sistem",
    features: ["DC Inverter", "4 Season Use", "Quiet Operation"],
    featuresTr: ["DC İnverter", "4 Mevsim Kullanım", "Sessiz Çalışma"],
    gradient: "from-green-500/20 via-lime-500/20 to-green-600/20",
    accentColor: "bg-green-500",
    image: Product4,
    price: "₺18,500",
    brand: "Snowman",
    category: "Inverter AC",
    categoryTr: "İnverter Klima",
  },
  {
    id: 5,
    name: "RV Air Conditioner",
    nameTr: "Karavan Kliması",
    description: "Compact and powerful RV air conditioner for mobile living",
    descriptionTr: "Kompakt ve güçlü karavan/RV kliması - Mobil yaşam için ideal",
    gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20",
    accentColor: "bg-orange-500",
    image: Product5,
    price: "₺15,000",
    brand: "Snowman",
    category: "Special Applications",
    categoryTr: "Özel Uygulamalar",
  },
  {
    id: 6,
    name: "Marine Air Conditioning Systems",
    nameTr: "Marine Klima Sistemleri",
    description: "Corrosion-resistant air conditioning for marine vessels",
    descriptionTr: "Deniz araçları için korozyona dayanıklı klima sistemleri",
    features: ["Saltwater Resistant", "24/7 Support", "Professional Installation"],
    featuresTr: ["Deniz Suyu Direnci", "7/24 Destek", "Profesyonel Montaj"],
    gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20",
    accentColor: "bg-indigo-500",
    icon: "🔧",
    image: Product6,
    price: "₺22,000",
    brand: "Snowman",
    category: "Special Applications",
    categoryTr: "Özel Uygulamalar",
  },
];

export default function Product() {
  const { language } = useLanguage();
  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, {
    once: true,
    margin: "-50px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const handleDownloadCatalog = () => {
    // Download the appropriate catalog based on the selected language
    const catalogUrl = language === 'en' ? '/catalog-en.pdf' : '/catalog-tr.pdf';
    window.open(catalogUrl, '_blank');
  };

  // Product Schema for SEO
  const generateProductSchema = (product: typeof products[0]) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price?.replace("₺", "").replace(",", ""),
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Snowman Climate Systems",
      },
    },
    image: product.image.src,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="products" className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 md:py-32 px-4 relative overflow-hidden" aria-labelledby="products-heading">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          className="text-center mb-24 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 backdrop-blur-sm mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Premium Climate Solutions
            </span>
          </motion.div>

          <motion.h2
            id="products-heading"
            className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight"
            variants={itemVariants}>
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>

          <motion.p
            className="md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}>
            Split AC, inverter air conditioners, and commercial HVAC systems - Advanced climate control solutions for your living and working spaces
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={productsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}>
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              itemScope
              itemType="https://schema.org/Product">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateProductSchema(product)),
                }}
              />
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl overflow-hidden  hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
                {/* Image Section with Modern Design */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white  to-white/20">
                  {/* Animated Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}></div>

                  {/* Geometric Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "30px 30px",
                    }}></div>

                  {/* Main Product Image - Floating Effect */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{
                        scale: 1.1,
                        rotate: 1,
                        transition: { duration: 0.4 },
                      }}>
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.description} - Snowman Climate`}
                        fill
                        className="object-contain drop-shadow-2xl transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>

                  {/* Category Badge - Top Left */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-green-500 backdrop-blur-lg rounded-full border border-green-300 shadow-xl">
                    <span className="text-xs  font-semibold text-white uppercase tracking-wider">
                      Premium
                    </span>
                  </div>

                  {/* Floating Package Icon - Bottom Left */}
                  <motion.div
                    className="absolute bottom-6 left-6 w-12 h-12 bg-green-400/50 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 shadow-xl"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}>
                    <Package className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white/10 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/10 rounded-bl-3xl"></div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" itemProp="name">
                    {language === 'tr' && product.nameTr ? product.nameTr : product.name}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed" itemProp="description">
                    {language === 'tr' && product.descriptionTr ? product.descriptionTr : product.description}
                  </p>
                  
               

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-green-700 hover:bg-green-600 text-white py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}>
                    <span>View Details</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          className="relative"
          variants={ctaVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}>
          <motion.div
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}></div>
            </div>

            <motion.div
              className="relative z-10 text-center space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                <Download className="w-4 h-4 text-blue-400" />
                <span className="text-xs md:text-sm font-medium text-white">
                  Full Catalog Available
                </span>
              </motion.div>

              <motion.h3
                className="text-2xl md:text-5xl font-bold text-white mb-4"
                variants={itemVariants}>
                Explore Our Complete Range
              </motion.h3>

              <motion.p
                className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto"
                variants={itemVariants}>
                Download our comprehensive catalog to discover all our premium
                products, specifications, and exclusive offers
              </motion.p>

              <motion.button
                onClick={handleDownloadCatalog}
                className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-slate-900 px-10 py-5 rounded-2xl font-semibold text-xs md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}>
                  <Download className="w-6 h-6" />
                </motion.div>
                <span className=" whitespace-nowrap">Download Catalog</span>
              </motion.button>

              {/* Trust Indicators */}
              <motion.div
                className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10"
                variants={containerVariants}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}>
                <motion.div
                  className="flex flex-col items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <motion.div
                    className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <Star className="w-7 h-7 text-blue-400" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Premium Quality
                    </div>
                    <div className="text-sm text-slate-400">
                      Certified Products
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <motion.div
                    className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <Shield className="w-7 h-7 text-purple-400" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Extended Warranty
                    </div>
                    <div className="text-sm text-slate-400">Up to 5 Years</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <motion.div
                    className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <Zap className="w-7 h-7 text-emerald-400" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Fast Service
                    </div>
                    <div className="text-sm text-slate-400">
                      Quick Installation
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20 md:hidden">
          {/* Left Side - Features */}
          <StaggeredChildren className="space-y-4 " staggerDelay={0.2}>
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mb-4"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}>
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-primary/10 p-3 rounded-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <Award className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3">
                    Premium Quality
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground ">
                    We maintain the highest standards in every product, ensuring
                    exceptional quality and durability that exceeds
                    expectations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-secondary/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mb-4"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}>
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-secondary/10 p-3 rounded-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <Users className="h-8 w-8 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3">
                    Customer Focus
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground ">
                    Your satisfaction is our top priority. We provide
                    personalized service and support to meet your unique needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-primary-light/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mb-4"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}>
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-primary-light/10 p-3 rounded-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <Zap className="h-8 w-8 text-primary-light" />
                </motion.div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3">
                    Innovation
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground ">
                    Leading the industry with cutting-edge solutions and
                    innovative approaches to meet modern challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </StaggeredChildren>

          {/* Right Side - Stats */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Products
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">1+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Years
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-2xl font-bold text-primary-light mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Support
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Countries
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-3xl border border-primary/20">
              <h4 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Globe className="h-6 w-6 text-primary mr-3" />
                Our Mission
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To deliver exceptional products and services that exceed
                customer expectations while maintaining the highest standards of
                quality, innovation, and reliability in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-5 md:hidden">
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">
              Reliability
            </h4>
            <p className="text-xs text-muted-foreground">
              Consistent quality and dependable service you can trust.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">
              Excellence
            </h4>
            <p className="text-xs text-muted-foreground">
              Striving for perfection in every product and interaction.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-primary-light/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary-light" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">
              Partnership
            </h4>
            <p className="text-xs text-muted-foreground">
              Building lasting relationships with our valued customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
