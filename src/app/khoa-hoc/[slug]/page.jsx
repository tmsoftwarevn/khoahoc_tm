"use client";

import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import DetailKhoahoc from "../../../components/khoa-hoc/detail-khoahoc/DetailKhoahoc";

import Social from "@/components/social/Social";

import { useState } from "react";
import CustomVideo from "@/ui/modal video/CustomVideo";


const Khoahoc = ({ params }) => {
  const [isOpen, setOpen] = useState(false);
  //const customVideoUrl = "https://www.youtube.com/watch?v=Bkzdj924XAg";
  const customVideoUrl = "https://tmaccademia.tmsoftware.vn/storage/course/2/raw_1729147997_vid-20221129-203222-17291479958096.mp4";
  const slug = params.slug;

  return (
    <div>
     

      <Header />

      <div className="container">
        <DetailKhoahoc slug = {slug} isOpen={isOpen} setOpen={setOpen} />
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
