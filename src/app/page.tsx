"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/product";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/lib/loading-context";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  const { isLoading, loadingComplete } = useLoading();

  return (
    <>
      <LoadingScreen onLoadingComplete={loadingComplete} duration={3000} />

      {!isLoading && (
        <PageTransition>
          <ScrollProgress />
          <Header />
          <Hero />
          <About />
          <Product />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </PageTransition>
      )}
    </>
  );
}
