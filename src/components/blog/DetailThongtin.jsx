import { useEffect, useState } from "react";
import Breadcrum2 from "@/components/breadcrum/Breadcrum2";

const DetailThongtin = (props) => {
  const { detail } = props;

  const [string, setString] = useState(["T"]);

  return (
    <div className="my-5">
      <div className="px-2">
        <h1 className=" uppercase text-2xl font-semibold mb-3">{detail?.tieude}</h1>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: detail?.noidung }}
        ></div>
      </div>
    </div>
  );
};

export default DetailThongtin;
