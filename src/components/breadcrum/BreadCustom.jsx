import "./custom.scss";

import { useEffect, useState } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js
import { convertSlug } from "@/util/convertSlug";

const BreadCustom = (props) => {
  const { listBread } = props;
  const [bread, setBread] = useState([]);

  useEffect(() => {
    customBreadcrumb();
  }, [listBread]);

  const customBreadcrumb = () => {
    let breadcrumbs = [
      {
        title: <Link href="/">Trang chủ</Link>, // Default "Home" link
      },
    ];

    listBread?.forEach((item) => {
      let slug = convertSlug(item); // Assuming you have a convertSlug function
      let navi = `/${slug}`;

      breadcrumbs.push({
        title: <Link href={navi}>{item}</Link>, // Dynamically creating breadcrumb item
      });
    });

    setBread(breadcrumbs); // Set bread array with JSX
  };

  return (
    <div>
      <ul className="breadcrumb !text-white text-lg "> 
        {bread.map((item, idx) => (
          <li className="breadcrumb-item " key={`lpo${idx}`}>
            {item.title} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCustom;

