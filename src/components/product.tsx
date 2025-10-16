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
    image:Product6,
  },
];

export default function Product() {
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
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Premium Solutions
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of cutting-edge climate control
            solutions designed to transform your living and working spaces
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl overflow-hidden  hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
                {/* Image Section with Modern Design */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900">
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
                    <div className="relative w-full h-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-700"
                        style={{
                          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Glowing Orbs */}
                  <div
                    className={`absolute top-1/4 left-1/4 w-32 h-32 ${product.accentColor} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div
                    className={`absolute bottom-1/4 right-1/4 w-32 h-32 ${product.accentColor} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700`}
                    style={{ animationDelay: "0.2s" }}></div>

                  {/* Category Badge - Top Left */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Premium
                    </span>
                  </div>

                  {/* Floating Package Icon - Bottom Left */}
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 shadow-xl transform group-hover:translate-y-[-4px] group-hover:scale-110 transition-all duration-300">
                    <Package className="w-6 h-6 text-white" />
                  </div>

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
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
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

            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-4">
                <Download className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">
                  Full Catalog Available
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Explore Our Complete Range
              </h3>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Download our comprehensive catalog to discover all our premium
                products, specifications, and exclusive offers
              </p>

              <button className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Download Catalog</span>
              </button>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Star className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Premium Quality
                    </div>
                    <div className="text-sm text-slate-400">
                      Certified Products
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Extended Warranty
                    </div>
                    <div className="text-sm text-slate-400">Up to 5 Years</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Zap className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      Fast Service
                    </div>
                    <div className="text-sm text-slate-400">
                      Quick Installation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
