import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "./stickyCard.scss";
import CourseInclude from "@/components/khoa-hoc/detail-khoahoc/CourseInclude";
import ButtonHover from "@/ui/custom/ButtonHover";
import { useRouter } from "next/navigation";
import { convertSlug } from "../../util/convertSlug";

const StickyCardContent = (props) => {
  const { setOpen, course, listVideo, setUrl } = props;
  const route = useRouter();

  const handleBuy = (name) => {
    localStorage.setItem("course", name);

    route.push(`/thanh-toan?s=${course?.course_slug}`);
  };
  const handle_show_video = () => {
    setOpen(true);
  
  };
  return (
    <div className="shadow-sm shadow-gray-400 sticky-card">
      <div className="relative">
        <Image
          loading="lazy"
          //src="/123.jpg"
          src={`${process.env.URL_BACKEND}/storage/${course?.course_image}`}
          alt={"ds"}
          width="0"
          height="0"
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full h-auto "
        />
        <span className="video-play-button" onClick={() => handle_show_video()}>
          <span></span>
        </span>
      </div>

      <div className="p-5 bg-white">
        <div className="flex gap-5 items-center">
          <div className="text-2xl text-orange-600 font-bold">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(course?.strike_out_price)}
          </div>
          <div className="text-sm line-through text-gray-400">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(course?.price)}
          </div>
        </div>

        <button
          onClick={() => handleBuy(course.course_title)}
          className="w-full mt-5 relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
        >
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

        <CourseInclude course={course} listVideo={listVideo} />
      </div>
    </div>
  );
};

export default StickyCardContent;
