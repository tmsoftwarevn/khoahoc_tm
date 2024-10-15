import { useEffect, useState } from "react";
import BlogForDetail from "./BlogForDetail";
import Breadcrum2 from "@/components/breadcrum/Breadcrum2";

const DetailBlog = (props) => {
  const { slug, detail } = props;

  const [string, setString] = useState(["Tin tức"]);

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch_baiviet();
  }, [slug]);

  // useEffect(() => {
  //   if (detail?.tieude) {
  //     let arr = ["Tin tức"];
  //     arr.push(detail?.tieude);
  //     setString(arr);
  //   }
  // }, [detail]);


  const fetch_baiviet = async () => {
    const res = await fetch(`${process.env.URL_BACKEND}/api/v1/noibat-home`);
    const result = await res.json();
    if (result && result.data) {
      setList(result.data);
    }
  };

  return (
    <div className="mb-5">
      <div className="sm:flex gap-10 px-2">
        <div className="w-full sm:w-9/12 mt-3">
          <Breadcrum2 listBread={string} />
          <h1 className=" uppercase text-2xl font-semibold mb-3">{detail?.tieude}</h1>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: detail?.noidung }}
          ></div>
        </div>
        <div className="w-full sm:w-3/12 mt-3">
          <p className="uppercase text-xl font-semibold text-orange-500 css-brc">tin mới nhất</p>
          <div className="grid col-span-1 gap-5">
            {list &&
              list.map((item, idx) => {
                return (
                  <div key={`kmm${idx}`} className="col-span-1">
                    <BlogForDetail item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
