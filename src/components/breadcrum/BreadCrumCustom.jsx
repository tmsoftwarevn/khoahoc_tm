import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";

import { convertSlug } from "@/util/convertSlug";
import Link from "next/link";

const BreadcrumbCustom = (props) => {
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
      let navi = `/the-loai/${slug}`;

      if (item === "Combo sách - quà tặng") {
        navi = `/${slug}`;
      }
      if (item === "quà tặng") {
        navi = `/${slug}`;
      }
      breadcrumbs.push({
        title: <Link href={navi}>{item}</Link>,
      });
    });
    setBread(breadcrumbs);
  };

  return (
    <div className="py-5 md:py-5 uppercase px-2 lg:px-0 ">
      <Breadcrumb className="text-sm md:text-lg font-semibold" items={bread} />
    </div>
  );
};

export default BreadcrumbCustom;
