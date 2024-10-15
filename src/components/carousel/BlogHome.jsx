import Slider from "react-slick";
import React, { useEffect } from "react";
import Blog from "@/components/blog/Blog";

let settings = {
  //dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BlogHome = (props) => {
  const { list } = props;

  return (
    <div className="w-full relative px-2">
      <Slider {...settings}>
        {list &&
          list.map((item, idx) => {
            return (
              <div
                key={`fsrrdf${idx}`}
                className="border border-gray-300 rounded-xl"
              >
                <Blog detail={item} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default BlogHome;
