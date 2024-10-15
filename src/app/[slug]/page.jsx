"use client";

import Detail from "@/components/detail Course/detail/Detail";

import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import { useEffect, useState } from "react";
import NotFound from "@/components/notfound/NotFound";
import LoadingCss from "@/components/loading/LoadingCss";

const DetailCourse = ({ params }) => {
  const slug = params.slug;
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetch_detail = async () => {
      //check sp thuộc Course or combo
      const res = await fetch(
        `${process.env.URL_BACKEND}/api/v1/Course/${slug}`
      );
      const result = await res.json();
      if (result && result.data) {
        setLoading(false);
        fetch_breadCrumb_cate(result.data.idCategory, result.data.id_type);
      } else setErr(true);
    };
    fetch_detail();
  }, [slug]);

 

  if (err && loading === true)
    return (
      <>
        <Header />

        <div className="container">
          <NotFound />
        </div>

        <Footer />
      </>
    );

  if (loading) return <LoadingCss />;

  return (
    <>
      <Header />
      <div className="">
        <div className="container">
          <Detail slug={slug}  />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailCourse;
