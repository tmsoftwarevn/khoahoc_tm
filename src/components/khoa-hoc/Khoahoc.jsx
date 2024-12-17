import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import "./khoahoc.scss";
import { call_list_course } from "@/api/CallApi";

const pricingList = [
  {
    bannerImg: "/123.jpg",
    discount: "10%",
    category: "Marketing",
    title: "Not Your Regular Home Decoration? Start Today with us",
    text: "It’s no secret that the digital industry is booming. Working from today...",
    authorImg:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    name: "Alex Hales",
  },
];

const countdown = [
  {
    time: "3",
    type: "Days",
  },
  {
    time: "10",
    type: "Giờ",
  },
  {
    time: "14",
    type: "Phút",
  },
  {
    time: "11",
    type: "Giây",
  },
];

const PricingItem = ({ item }) => {
  const { bannerImg, discount, slug, category, title, text, authorImg, name } =
    item;
  const route = useRouter();

  return (
    <div className="bg-gray-50 shadow-xl ">
      <div
        onClick={() => route.push(`/khoa-hoc/${slug}`)}
        className="relative cursor-pointer"
      >
        <div className="flex justify-center items-center text-xl w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:absolute before:top-1/2 before:left-1/2">
          <FontAwesomeIcon icon={faPlay} className="ml-1" />
        </div>
        <img src={bannerImg} className="w-full h-[270px] object-cover rounded-t" alt={title} />

        <div className="flex justify-center items-center absolute -bottom-6 right-3 bg-gradient-to-r from-red-400 to-red-500 p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          <p className="text-center text-sm font-semibold text-white">
            {discount} <br />
            <span className="text-gray-100 text-xs">off</span>
          </p>
        </div>
      </div>
      <div className="p-6 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white ">
        {/* <a href="#!">
          <p className="text-[15px] opacity-80 mb-2">{category}</p>
        </a> */}

        <h5 className="text-2xl line-clamp-2 font-medium leading-snug">{title}</h5>

        <p className="text-[15px] line-clamp-2 lg:line-clamp-4 opacity-80">
          {text}
        </p>
        <div className="flex justify-between my-2">
          {/* <div className="flex items-center">
            <div className="mr-2">
              <img
                src={authorImg}
                alt={name}
                className="max-w-full h-auto rounded-full border"
                width="40"
              />
            </div>
            <div>
              <h4 className="font-medium mb-0">{name}</h4>
            </div>
          </div> */}
          <button
            onClick={() => route.push(`/khoa-hoc/${slug}`)}
            className="border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white duration-300 d-flex align-items-center"
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

PricingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Countdown = ({ list }) => (
  <div className="mr-3">
    <div className="flex justify-center items-center w-12 sm:w-20 h-12 sm:h-20 bg-blue-600 text-white rounded-xl">
      <h5 className="text-xl sm:text-4xl font-medium">{list.time}</h5>
    </div>
    <p className="font-medium mt-2">{list.type}</p>
  </div>
);

Countdown.propTypes = {
  list: PropTypes.object.isRequired,
};

const Pricing12 = () => {
  const total12HoursInSeconds = 12 * 60 * 60; // 12 hours in seconds

  const calculateTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return [
      { time: hours, type: "Giờ" },
      { time: minutes, type: "Phút" },
      { time: seconds, type: "Giây" },
    ];
  };

  const [countdown, setCountdown] = useState([]);
  const [endTime, setEndTime] = useState(null);
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    // Retrieve or initialize countdown end time
    const initializeCountdown = () => {
      const now = new Date().getTime();
      const storedEndTime = localStorage.getItem("countdownEndTime");

      if (storedEndTime) {
        const remainingSeconds = Math.max(
          0,
          Math.floor((storedEndTime - now) / 1000)
        );
        setEndTime(storedEndTime);
        setCountdown(calculateTime(remainingSeconds));
      } else {
        const newEndTime = now + total12HoursInSeconds * 1000;
        localStorage.setItem("countdownEndTime", newEndTime);
        setEndTime(newEndTime);
        setCountdown(calculateTime(total12HoursInSeconds));
      }
    };

    initializeCountdown();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      if (endTime) {
        const remainingSeconds = Math.max(
          0,
          Math.floor((endTime - now) / 1000)
        );

        if (remainingSeconds === 0) {
          const newEndTime = now + total12HoursInSeconds * 1000;
          localStorage.setItem("countdownEndTime", newEndTime);
          setEndTime(newEndTime);
          setCountdown(calculateTime(total12HoursInSeconds));
        } else {
          setCountdown(calculateTime(remainingSeconds));
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  useEffect(() => {
    const call_data = async () => {
      let data = await call_list_course();
      custom_data(data);
    };
    call_data();
  }, []);

  const custom_data = (list) => {
    let arr = [];
    list &&
      list.map((item, idx) => {
        const calc =  Math.floor((item.price - item.strike_out_price) /item.price * 100);
        arr.push({
          bannerImg: `${process.env.URL_BACKEND}/storage/${item.thumb_image}`,
          discount: `${calc}%`,
          title: item.course_title,
          text: item.keywords,
          slug: item.course_slug,
        });
      });
    setListCourse(arr);
  };

  return (
    <section className=" py-14 px-2 lg:py-24 text-zinc-900 relative overflow-hidden z-[1]">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-center bg-no-repeat -z-[1] opacity-10 "
        // style={{
        //   backgroundImage:
        //     "url(https://cdn.easyfrontend.com/pictures/pricing/pricing_12.png)",
        // }}
        style={{
          backgroundImage: "url(/bg-kh.jpg)",
        }}
      />
      <div className="container ">
        <div className="flex justify-center text-center">
          <div className="shadow-md shadow-orange-500 rounded-lg px-6 py-4  bg-white dark:bg-gray-800">
            <div className="flex items-center justify-center">
              <div className="animate-charcter text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
                ƯU ĐÃI CÓ HẠN
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-center mt-6 md:mt-12">
          {countdown.map((list, j) => (
            <Countdown list={list} key={j} />
          ))}
        </div>

        {/* className="col-span-1 text-sm flex uppercase cursor-pointer px-5 py-2 bg-white relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white text-orange-500" */}

        <div className="grid grid-cols-6 gap-6 mt-12 ">
          {listCourse.map((item, i) => (
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 " key={i}>
              <PricingItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing12;
