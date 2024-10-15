"use client";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import Gioithieu from "@/components/gioi-thieu/Gioithieu";

import LoadingCss from "@/components/loading/LoadingCss";
import { useEffect, useState } from "react";

const Gioithieu_Home = () => {
  let [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch_Gioithieu = async () => {
      const res = await fetch(`${process.env.URL_BACKEND}/api/v1/about`);
      const result = await res.json();

      if (result && result.data) {
        setDescription(result.data[0]?.description);
        setIsLoading(false);
      }
    };
    fetch_Gioithieu();
  }, []);

  if (isLoading) return <LoadingCss />;

  return (
    <div>
      <Header />

      <Gioithieu description={description} />
      <Footer />
    </div>
  );
};

export default Gioithieu_Home;
