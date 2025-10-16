import useLanguage from "@/lib/language-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const WHATSAPP_NUMBER = "905058562002";
const EMAIL = "contact@snowmann.net";

export const Contact = () => {
  const { t, language } = useLanguage();

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: language === 'en' ? "Name is required" : "İsim gerekli" })
      .max(100, { message: language === 'en' ? "Name is too long" : "İsim çok uzun" }),
    email: z
      .string()
      .trim()
      .email({ message: language === 'en' ? "Invalid email" : "Geçersiz e-posta" })
      .max(255, { message: language === 'en' ? "Invalid email" : "Geçersiz e-posta" }),
    phone: z
      .string()
      .trim()
      .min(1, { message: language === 'en' ? "Phone is required" : "Telefon gerekli" }),
    message: z
      .string()
      .trim()
      .min(1, { message: language === 'en' ? "Message is required" : "Mesaj gerekli" })
      .max(1000, { message: language === 'en' ? "Message is too long" : "Mesaj çok uzun" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Construct WhatsApp message
    const message = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Show success message
    toast.success(language === 'en' ? "Message sent successfully!" : "Mesaj başarıyla gönderildi!");

    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
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
              viewport={{ once: true }}
            >
              {t("contact.title")}
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
              {t("contact.subtitle")}
            </motion.p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {language === 'en' ? 'Send us a Message' : 'Bize Mesaj Gönderin'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Fill out the form below and we\'ll get back to you as soon as possible.'
                        : 'Aşağıdaki formu doldurun, en kısa sürede size dönüş yapacağız.'
                      }
                    </p>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">{t("contact.name")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={language === 'en' ? "Enter your full name" : "Adınızı ve soyadınızı girin"}
                                className="h-12 border-primary/20 focus:border-primary rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">{t("contact.email")}</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={language === 'en' ? "Enter your email address" : "E-posta adresinizi girin"}
                                className="h-12 border-primary/20 focus:border-primary rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">{t("contact.phone")}</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder={language === 'en' ? "Enter your phone number" : "Telefon numaranızı girin"}
                                className="h-12 border-primary/20 focus:border-primary rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">{t("contact.message")}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={language === 'en' 
                                  ? "Tell us about your requirements or questions..." 
                                  : "İhtiyaçlarınızı veya sorularınızı bize anlatın..."
                                }
                                className="min-h-[140px] border-primary/20 focus:border-primary rounded-xl resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-light text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
                        <Send className="mr-3 h-5 w-5" />
                        {t("contact.send")}
                      </Button>
                    </form>
                  </Form>
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {language === 'en' ? 'Get in Touch' : 'İletişime Geçin'}
                </h3>

                <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        {EMAIL}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'We respond within 24 hours' : '24 saat içinde yanıtlarız'}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-2xl">
                      <MessageCircle className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                        +90 505 856 20 02
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'Instant messaging support' : 'Anlık mesajlaşma desteği'}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-light/10 rounded-2xl">
                      <MapPin className="h-6 w-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'en' ? 'Office' : 'Ofis'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'en' ? 'Snowmann Headquarters' : 'Snowmann Genel Merkez'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'Turkey' : 'Türkiye'}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-2xl">
                      <Clock className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'en' ? 'Business Hours' : 'Çalışma Saatleri'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM' : 'Pazartesi - Cuma: 09:00 - 18:00'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'Weekend support available' : 'Hafta sonu desteği mevcut'}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {language === 'en' ? 'Quick Actions' : 'Hızlı İşlemler'}
                </h4>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp\'ta Sohbet Et'}
                  </Button>
                  <Button
                    onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-xl py-3">
                    <Mail className="mr-2 h-4 w-4" />
                    {language === 'en' ? 'Send Email' : 'E-posta Gönder'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
