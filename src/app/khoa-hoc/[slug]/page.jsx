"use client";


import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import DetailKhoahoc from "../../../components/khoa-hoc/detail-khoahoc/DetailKhoahoc";

const page = () => {
  return (
    <div>

      <Header />

      <div className="container">
        
      <DetailKhoahoc />

      </div>

      <Footer />

    </div>
  );
};

export default page;
