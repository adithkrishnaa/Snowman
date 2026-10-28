import useLanguage from "@/lib/language-context";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const MAP_ID = "1gyCapKxkqgL8jzEmombqArsgw4DLHMQ";
const MAP_EMBED_URL = `https://www.google.com/maps/d/embed?mid=${MAP_ID}`;
const MAP_VIEW_URL = `https://www.google.com/maps/d/viewer?mid=${MAP_ID}`;

export const DealerMap = () => {
  const { t } = useLanguage();

  return (
    <section id="dealers" className="py-24 bg-background relative overflow-hidden" aria-labelledby="dealers-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16" delay={0.2}>
            <motion.h2
              id="dealers-heading"
              className="text-3xl md:text-6xl font-display font-bold text-foreground mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
            >
              {t("dealers.title")}
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary-light mx-auto rounded-full mb-8"
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
              viewport={{ once: true }}
            >
              {t("dealers.subtitle")}
            </motion.p>
          </AnimatedSection>

          {/* Map */}
          <Card className="p-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            {/* The iframe is shifted up to hide the My Maps title bar */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-xl overflow-hidden">
              <iframe
                src={MAP_EMBED_URL}
                title={t("dealers.title")}
                className="absolute left-0 top-[-64px] w-full h-[calc(100%+64px)] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Card>

          <div className="text-center mt-6">
            <a
              href={MAP_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              {t("dealers.openMap")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
