import BreadCustom from "@/components/breadcrum/BreadCustom";
import { useState } from "react";
import { GoClock } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { FaTag } from "react-icons/fa";

const HeaderCourse = (props) => {
  const {course} = props;
  return (
    <div className="text-white px-5 py-5">
      
      <h1 className="font-semibold uppercase">{course?.course_title}</h1>
      <div className="my-3 font-medium text-lg">
        {/* Giúp bạn biến ý tưởng thành những video ấn tượng để xây dựng thương hiệu
        cá nhân, bán hàng và bắt kịp xu hướng viral trên mạng xã hội.If you read
        the above list and are feeling a bit confused, don’t worry! As an
        instructor and student on Udemy for almost 4 years, I know what it’s
        like to be overwhelmed with boring and mundane. */}
        {course?.keywords}
      </div>

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
