import Slider from "react-slick";
import Card from "../card/Card";
import { useEffect, useState } from "react";

let settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  // speed: 4000,
  // autoplaySpeed: 0,
  // cssEase: "linear",
  // pauseOnHover: true,

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

const RelatedProduct = (props) => {
  const { detail } = props;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch_product();
  }, [detail]);

  const fetch_product = async () => {
    let arrId = detail?.idCategory ? detail.idCategory : [];
    const res = await fetch(
      `${process.env.URL_BACKEND}/api/v1/related_with_id`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arrId }),
      }
    );

    const result = await res.json();
    if (result && result.data) setProduct(result.data);
  };

  if (+product?.length < 2) return <></>;
  else
    return (
      <div className="mt-10">
        <div className="uppercase text-2xl text-orange-600 font-semibold  mb-2">
          Sản phẩm liên quan
        </div>

        <div className="mt-4">
          <Slider {...settings}>
            {product &&
              product.map((item, idx) => {
                return (
                  <div
                    key={`fsrrdf${idx}`}
                    className="mb-3 shadow-gray-400 shadow-sm hover:-translate-y-2 duration-300"
                  >
                    <Card idx={idx} item={item} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    );
};

export default RelatedProduct;
