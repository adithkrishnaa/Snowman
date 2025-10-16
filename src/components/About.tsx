import useLanguage from "@/lib/language-context";
import { Award, Users, Target, CheckCircle, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredChildren } from "./AnimatedSection";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-accent/20 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-light rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-20" delay={0.2}>
            <motion.h2
              className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}>
              {t("about.title")}
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary via-primary-light to-secondary mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              {t("about.text")}
            </motion.p>
          </AnimatedSection>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 ">
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
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Premium Quality
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain the highest standards in every product,
                      ensuring exceptional quality and durability that exceeds
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
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Customer Focus
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your satisfaction is our top priority. We provide
                      personalized service and support to meet your unique
                      needs.
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
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Innovation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading the industry with cutting-edge solutions and
                      innovative approaches to meet modern challenges.
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggeredChildren>

            {/* Right Side - Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Products
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    1+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Years
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-light mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Support
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Countries
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20">
                <h4 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  Our Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional products and services that exceed
                  customer expectations while maintaining the highest standards
                  of quality, innovation, and reliability in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">
                Reliability
              </h4>
              <p className="text-muted-foreground">
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
              <p className="text-muted-foreground">
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
              <p className="text-muted-foreground">
                Building lasting relationships with our valued customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
