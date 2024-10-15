"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Feature />
      
      <div className="mb-10"></div>

      <Footer />
    </>
  );
}
