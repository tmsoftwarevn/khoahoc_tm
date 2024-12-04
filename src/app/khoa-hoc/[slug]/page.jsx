"use client";

import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import DetailKhoahoc from "../../../components/khoa-hoc/detail-khoahoc/DetailKhoahoc";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const page = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ScrollGlobal>
        <Header />

        <div className="container">
          <DetailKhoahoc isOpen={isOpen} setOpen={setOpen} />
        </div>

        <Footer />
      </ScrollGlobal>
      <Social />

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="GUGkvPT5TZA"
        onClose={() => setOpen(false)}
      />

    </div>
  );
};

export default page;
