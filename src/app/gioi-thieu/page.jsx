"use client";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import Gioithieu from "@/components/gioi-thieu/Gioithieu";

import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

const Gioithieu_Home = () => {
  

  return (
    <div>
      <ScrollGlobal>
        <Header />

        <Gioithieu  />

        <Footer />
      </ScrollGlobal>
      <Social />
    </div>
  );
};

export default Gioithieu_Home;
