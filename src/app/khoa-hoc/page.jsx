"use client";

import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import Course from "@/components/home/Course";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

const page = () => {
  return (
    <div>
      <ScrollGlobal>

      
      <Header />

      <Course />

      <Footer />

      </ScrollGlobal>
      <Social />
    </div>
  );
};

export default page;
