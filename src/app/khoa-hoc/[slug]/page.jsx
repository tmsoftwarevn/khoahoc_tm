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
  const customVideoUrl = "";
  const slug = params.slug;
  const [url, setUrl] = useState('');
  return (
    <div>
     

      <Header />

      <div className="container">
        <DetailKhoahoc setUrl={setUrl} slug = {slug} isOpen={isOpen} setOpen={setOpen} />
      </div>

      <Footer />

      <Social />

      <CustomVideo
        isOpen={isOpen}
        setOpen={setOpen}
        customVideoUrl={`${process.env.URL_BACKEND}/storage/${url}`}
      />
    </div>
  );
};

export default Khoahoc;
