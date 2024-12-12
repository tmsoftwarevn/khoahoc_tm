"use client";

import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import DetailKhoahoc from "../../../components/khoa-hoc/detail-khoahoc/DetailKhoahoc";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import CustomVideo from "@/ui/modal video/CustomVideo";

import AnimationBanner from "@/ui/animation-banner/AnimationBanner";

const Khoahoc = () => {
  const [isOpen, setOpen] = useState(false);
  const customVideoUrl = "https://www.youtube.com/watch?v=Bkzdj924XAg";

  return (
    <div>
      {/* <AnimationBanner /> */}

      <Header />

      <div className="container">
        <DetailKhoahoc isOpen={isOpen} setOpen={setOpen} />
      </div>

      <Footer />

      <Social />

      <CustomVideo
        isOpen={isOpen}
        setOpen={setOpen}
        customVideoUrl={customVideoUrl}
      />
    </div>
  );
};

export default Khoahoc;
