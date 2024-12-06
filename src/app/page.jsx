"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Course from "@/components/khoa-hoc/Khoahoc";
import LoadingPre from "@/ui/loading/Loading";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Appearance from "@/ui/appearance/Appearance";
import Social from "@/components/social/Social";
import Test from "@/ui/test/Test";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const customVideoUrl =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <>
      <LoadingPre />

      <ScrollGlobal>
        <Header />

        <Hero isOpen={isOpen} setOpen={setOpen} />

        {/* <Test /> */}

        <Feature />

        <Appearance
          initialProps={{ opacity: 0, y: 100, scale: 0.9 }}
          finalProps={{ opacity: 1, y: 0, scale: 1 }}
        >
          <Course />
        </Appearance>

        <div className="mb-10"></div>

        <Footer />
      </ScrollGlobal>

      <Social />

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="GUGkvPT5TZA"
        onClose={() => setOpen(false)}
        className="modal-video-movie-wrap"
      /> */}
      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        url={customVideoUrl}

      >
        {/* <div className="modal-video-movie-wrap">
          <video
            src={customVideoUrl}
            controls = {true}
            width="100%"
            height="100%"
            autoPlay
          />
        </div> */}
      </ModalVideo>
    </>
  );
}
