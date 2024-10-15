"use client";

import Khoahoc from "../../components/khoa-hoc/Khoahoc";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";

const page = () => {
  return (
    <div>

      <Header />

      <div className="container">
        
        <Khoahoc />

      </div>

      <Footer />

    </div>
  );
};

export default page;
