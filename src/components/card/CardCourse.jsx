import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { GoClock } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
const CardCourse = (props) => {
  const { item } = props;
  const router = useRouter();

  return (
    <div onClick={()=> router.push('/khoa-hoc/fwer')} className="mb-5 pb-3 border border-gay-600 shadow-sm cursor-pointer">
      <Image
        src="/125.jpg"
        alt="sd"
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="px-4">
        <div className="text-xl font-semibold my-2 hover:text-blue-500 cursor-pointer">
          Chinh Phục Sản Xuất Video Ngắn
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-blue-600">
            <GoClock className="mr-1" />
            <span>10 giờ 25 phút</span>
          </div>
          <div className="flex items-center text-blue-600">
            <IoIosPlayCircle className="mr-1" />
            <span>20 bài giảng</span>
          </div>
        </div>

        <p className=""></p>
        <span className="text-orange-500 text-2xl font-bold mr-2">
          9.987.654 đ
        </span>

        <span className="line-through">12.000.000 đ</span>
      </div>
    </div>
  );
};

export default CardCourse;
