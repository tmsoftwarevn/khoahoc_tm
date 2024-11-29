"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Course from "@/components/home/Course";
import LoadingPre from "@/ui/loading/Loading";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import { useState } from "react";
import ModalVideo from "react-modal-video";


export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <LoadingPre />

      <ScrollGlobal>
        <Header />

        <Hero isOpen={isOpen} setOpen={setOpen} />

        <Feature />

        <Course />

        <div className="mb-10"></div>

        <Footer />
      </ScrollGlobal>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="GUGkvPT5TZA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
