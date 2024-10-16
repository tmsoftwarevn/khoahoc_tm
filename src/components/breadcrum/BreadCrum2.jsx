import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import "./bread.scss";
import { convertSlug } from "@/util/convertSlug";
import Link from "next/link";

const Breadcrum2 = (props) => {
  const { listBread } = props;

  const [bread, setBread] = useState([]);

  // console.log('bbbbbbbbb', listBread);

  useEffect(() => {
    customBreadcrumb();
  }, [listBread]);

  const customBreadcrumb = () => {
    let breadcrumbs = [
      {
        title: <Link href="/">Trang chủ</Link>,
      },
    ];
    listBread?.map((item) => {
      let slug = convertSlug(item);
      let navi = `/${slug}`;
      breadcrumbs.push({
        title: <Link href={navi}>{item}</Link>,
      });
    });
    setBread(breadcrumbs);
  };

  return (
    <div className="py-5 uppercase px-2 ">
      {/* <Breadcrumb
        className="text-sm font-semibold !text-white"
        items={bread}
      /> */}
     
    </div>
  );
};

export default Breadcrum2;
