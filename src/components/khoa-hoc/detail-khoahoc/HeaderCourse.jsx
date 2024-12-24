import BreadCustom from "@/components/breadcrum/BreadCustom";
import { useState } from "react";
import { GoClock } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { FaTag } from "react-icons/fa";

const HeaderCourse = (props) => {
  const { course } = props;
  return (
    <div className="text-white px-5 py-5">
      <h1 className="font-semibold uppercase">{course?.course_title}</h1>
      <div
        className="my-3 font-medium text-lg"
        dangerouslySetInnerHTML={{
          __html: course?.description,
        }}
      />
      {/* <div className="flex items-center gap-5 lg:gap-10">
        <div className="flex items-center ">
          <GoClock className="mr-1 font-bold" />
          <span>10 giờ 25 phút</span>
        </div>
        <div className="flex items-center ">
          <IoIosPlayCircle className="mr-1" />
          <span>20 bài giảng</span>
        </div>
        <div className="items-center hidden md:flex ">
          <FaTag className="mr-1" />
          <span>Mọi trình độ</span>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderCourse;
