"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const pricingList = [
  {
    bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses3.jpg",
    discount: "10%",
    category: "Marketing",
    title: "Not Your Regular Home Decoration? Start Today with us",
    text: "It’s no secret that the digital industry is booming. Working from today...",
    authorImg:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    name: "Alex Hales",
  },
  {
    bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses11.jpg",
    discount: "18%",
    category: "Branding",
    title: "The Complete Digital Marketing Guide Course",
    text: "Some quick example text to build on the card the bulk content...",
    authorImg:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Steve Roger",
  },
  {
    bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses5.jpg",
    discount: "20%",
    category: "Analytics",
    title:
      "Master React JS and hire your self for sure! So let get this started",
    text: "React JS: The most popular framework in today's programming...",
    authorImg:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
    name: "John Smith",
  },
];

const countdown = [
  {
    time: "3",
    type: "Days",
  },
  {
    time: "10",
    type: "Hours",
  },
  {
    time: "14",
    type: "Minutes",
  },
  {
    time: "11",
    type: "Seconds",
  },
];

const PricingItem = ({ item }) => {
  const { bannerImg, discount, category, title, text, authorImg, name } = item;
  const route = useRouter();

  return (
    <div className="bg-gray-50 shadow-xl dark:bg-slate-800 h-full">
      <div className="relative">
        <div className="flex justify-center items-center text-xl w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:absolute before:top-1/2 before:left-1/2">
          <FontAwesomeIcon icon={faPlay} className="ml-1" />
        </div>
        <img src={bannerImg} className="w-full rounded-t" alt={title} />
        <div className="flex justify-center items-center absolute -bottom-6 right-3 bg-white dark:bg-slate-800 p-4 rounded-full">
          <p className="text-center leading-none text-lg text-blue-600">
            {discount} <br />
            <span className="text-black dark:text-white">off</span>
          </p>
        </div>
      </div>
      <div className="p-6">
        <a href="#!">
          <p className="text-[15px] opacity-80 mb-2">{category}</p>
        </a>
        <a href="#!">
          <h5 className="text-[19px] font-medium leading-snug">{title}</h5>
        </a>
        <p className="text-[15px] opacity-80 py-3">{text}</p>
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
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
          </div>
          <button
          onClick={() => route.push('/khoa-hoc/ưer')}
           className="border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white duration-300 d-flex align-items-center">
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
        { time: hours, type: "Hours" },
        { time: minutes, type: "Minutes" },
        { time: seconds, type: "Seconds" },
      ];
    };
  
    const [countdown, setCountdown] = useState([]);
    const [endTime, setEndTime] = useState(null);
  
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

  return (
    <section className="ezy__pricing12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-center bg-repeat -z-[1] opacity-10 dark:opacity-40"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/pricing/pricing_12.png)",
        }}
      />
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-[45px] font-bold mb-4">
              Deal Of The Day
            </h1>
            <p className="text-lg opacity-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              architecto aliquid? Sunt laudantium magni officiis atque, optio
              explicabo adipisci natus.
            </p>
          </div>
        </div>

        <div className="flex justify-center text-center mt-6 md:mt-12">
          {countdown.map((list, j) => (
            <Countdown list={list} key={j} />
          ))}
        </div>

        <div className="grid grid-cols-6 gap-6 mt-12 max-w-7xl mx-auto">
          {pricingList.map((item, i) => (
            <div className="col-span-6 sm:col-span-3 lg:col-span-2" key={i}>
              <PricingItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing12;
