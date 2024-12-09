import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "./stickyCard.scss";
import CourseInclude from "@/components/khoa-hoc/detail-khoahoc/CourseInclude";
import ButtonHover from "@/ui/custom/ButtonHover";

const StickyCardContent = (props) => {
  const { setOpen } = props;

  return (
    <div className="shadow-sm shadow-gray-400 sticky-card">
      <div className="relative">
        <Image
          loading="lazy"
          src="/123.jpg"
          alt={"ds"}
          width="0"
          height="0"
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full h-auto "
        />
        <span className="video-play-button" onClick={() => setOpen(true)}>
          <span></span>
        </span>
      </div>

      <div className="p-5 bg-white">
        <div className="flex gap-5 items-center">
          <div className="text-2xl text-blue-600 font-bold">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(5987641)}
          </div>
          <div className="text-sm line-through text-gray-400">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(9876543)}
          </div>
        </div>

        {/* <button className="mt-3 w-full py-2 text-center uppercase rounded bg-blue-600 text-white hover:bg-blue-500 duration-100">
          mua ngay
        </button> */}

        {/* <button
          type="submit"
          className="flex w-full mt-5 text-white justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        >
          Mua ngay
          <svg
            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-white group-hover:fill-gray-800"
            />
          </svg>
        </button> */}

        <button className="w-full mt-5 relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
          <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
          <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
          <div className="relative flex items-center justify-center py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span className="select-none">Mua ngay</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
            >
              <path
                clipRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </button>

        <CourseInclude />
      </div>
    </div>
  );
};

export default StickyCardContent;
