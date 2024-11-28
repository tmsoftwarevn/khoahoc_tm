"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Price from "@/components/home/Course";
import LoadingPre from "@/components/home/loading/Loading";

export default function Home() {
  return (
    <>
      <LoadingPre />
      <Header />

      <Hero />

      <Feature />
      <Price />

      <div className="mb-10"></div>

      <Footer />
    </>
  );
}
