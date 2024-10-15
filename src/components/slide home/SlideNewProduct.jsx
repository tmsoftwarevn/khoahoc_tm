import { Divider } from "antd";
import Slider from "react-slick";
import Card from "@/components/card/Card";
import { BsBook } from "react-icons/bs";
import { useEffect, useState } from "react";

let settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true, 
  speed: 4000,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const SlideNewProduct = (props) => {
  const { name } = props;

  const [listNewProduct, setListProductNew] = useState([]);

  useEffect(() => {
    const fetch_listProduct = async () => {
      const res = await fetch(`${process.env.URL_BACKEND}/api/v1/list_product_admin/0`);
      const result = await res.json();
      if (result && result.data) {
        setListProductNew(result.data);
      }
    };
    fetch_listProduct();
  }, []);

  
  return (
    <div className="mt-5 overflow-hidden">
      <div className="text-xl px-2 mb-5 mt-5 text-pink-600 flex text-center w-fit mx-auto items-center uppercase font-semibold ">
        <BsBook className="mr-3 hidden sm:block " />
        {name ? name : "Sách mới"}
      </div>
      <div className="">
        <Slider {...settings}>
          {listNewProduct &&
            listNewProduct.length > 0 &&
            listNewProduct.slice(0, 6).map((item, index) => {
              return (
                <div
                  key={item?.mainText}
                  className="shadow-gray-400 mb-5 bg-white shadow-sm border border-transparent hover:-translate-y-2 duration-300"
                >
                  <Card item={item} />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default SlideNewProduct;
