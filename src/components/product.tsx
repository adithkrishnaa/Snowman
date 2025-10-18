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
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Product1 from "../Assets/product3.jpg";
import Product2 from "../Assets/product14.png";
import Product3 from "../Assets/product5.jpg";
import Product4 from "../Assets/product15.png";
import Product5 from "../Assets/product8.png";
import Product6 from "../Assets/product11.jpg";

const products = [
  {
    id: 1,
    name: "Split Air Conditioning",
    description:
      "Energy-efficient cooling solutions for modern homes and offices",
    features: ["Energy Star Certified", "WiFi Control", "5-Year Warranty"],
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    accentColor: "bg-blue-500",
    icon: "❄️",
    image: Product1,
  },
  {
    id: 2,
    name: "Solar Air Conditioner",
    description: "Professional-grade heating and cooling for large spaces",
    features: ["Industrial Grade", "Remote Monitoring", "Custom Solutions"],
    gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    accentColor: "bg-purple-500",
    icon: "🏢",
    image: Product2,
  },
  {
    id: 3,
    name: "Central Air Conditioner",
    description: "Intelligent temperature control with advanced automation",
    features: ["AI Learning", "Voice Control", "Energy Reports"],
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    accentColor: "bg-emerald-500",
    icon: "🎛️",
    image: Product3,
  },
  {
    id: 4,
    name: "DC Inverter Heat Pump",
    description: "Advanced filtration systems for cleaner indoor air",
    features: ["HEPA Filters", "UV Sterilization", "Smart Sensors"],
    gradient: "from-green-500/20 via-lime-500/20 to-green-600/20",
    accentColor: "bg-green-500",

    image: Product4,
  },
  {
    id: 5,
    name: "RV Air Conditioner",
    description: "Eco-friendly heating and cooling in one efficient system",

    gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20",
    accentColor: "bg-orange-500",

    image: Product5,
  },
  {
    id: 6,
    name: "Marine Air Conditioner",
    description: "Professional maintenance and repair services",
    features: ["24/7 Support", "Preventive Care", "Expert Technicians"],
    gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20",
    accentColor: "bg-indigo-500",
    icon: "🔧",
    image: Product6,
  },
];

export default function Product() {
  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-32 px-4 relative overflow-hidden">
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
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 backdrop-blur-sm mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Premium Solutions
            </span>
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight"
            variants={itemVariants}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover our comprehensive range of cutting-edge climate control
            solutions designed to transform your living and working spaces
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          ref={productsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
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
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 shadow-xl"
                    whileHover={{ 
                      y: -4,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Package className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white/10 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/10 rounded-bl-3xl"></div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Details</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="relative"
          variants={ctaVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
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
              animate={ctaInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">
                  Full Catalog Available
                </span>
              </motion.div>

              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Explore Our Complete Range
              </motion.h3>

              <motion.p 
                className="text-xl text-slate-300 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Download our comprehensive catalog to discover all our premium
                products, specifications, and exclusive offers
              </motion.p>

              <motion.button 
                className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                <span>Download Catalog</span>
              </motion.button>

              {/* Trust Indicators */}
              <motion.div 
                className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10"
                variants={containerVariants}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="flex flex-col items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
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
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
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
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
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
      </div>
    </section>
  );
}
