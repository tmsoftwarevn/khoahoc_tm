import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "./stickyCard.scss";
import CourseInclude from "@/components/khoa-hoc/detail-khoahoc/CourseInclude";

const StickyCardContent = (props) => {
  const { setOpen } = props;

  return (
    <div className="shadow-sm shadow-gray-400">
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

        <button className="mt-3 w-full py-2 text-center uppercase rounded bg-blue-600 text-white hover:bg-blue-500 duration-100">
          mua ngay
        </button>

        <CourseInclude />
      </div>
    </div>
  );
};

export default StickyCardContent;
