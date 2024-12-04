"use client";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import Gioithieu from "@/components/gioi-thieu/Gioithieu";

import LoadingCss from "@/components/loading/LoadingCss";
import { useEffect, useState } from "react";

import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

const Gioithieu_Home = () => {
  let [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <ScrollGlobal>
        <Header />

        <Gioithieu description={description} />

        <Footer />
      </ScrollGlobal>
      <Social />
    </div>
  );
};

export default Gioithieu_Home;
