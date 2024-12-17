"use client";

import dynamic from "next/dynamic";
import ContentCourse from "./ContentCourse";
import { IoIosArrowBack } from "react-icons/io";

import { IoReorderThreeSharp } from "react-icons/io5";
import DrawMobile from "./DrawMobile";
import { useEffect, useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import "./watch.scss";
import { call_detail_course } from "@/api/CallApi";

const WatchVideo = () => {
  const router = useRouter();
  const [openDraw, setOpenDraw] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [link, setLink] = useState(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  const [title, setTitle] = useState();
  const searchParams = useSearchParams();
  const slug = searchParams.get("s");

  //console.log('ssssss', slug);
  const [course, setCourse] = useState();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const call_data = async () => {
      let data = await call_detail_course(slug);
      if (data) {
        custom_arr_section(data?.curriculum?.sections);
        setCourse(data?.course);
      }
    };
    call_data();
  }, []);

  // lấy các bài giảng
  const custom_arr_section = (sections) => {
    const sectionsArray = Object.entries(sections).map(([key, lectures]) => ({
      sectionKey: key,
      lectures,
      count_section: lectures.length,
    }));

    setSections(sectionsArray);
  };

  return (
    <div className="watch-video overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="left-video col-span-1 hidden xl:block">
          <div className="text-white bg-blue-600 w-full p-3 font-bold text-center ">
            KHÓA HỌC TM
          </div>
          <div className="box shadow-md p-2">
            <div
              className="flex items-center cursor-pointer hover:text-blue-600"
              onClick={() => router.push("/")}
            >
              <IoIosArrowBack className="text-xs" />
              <div className="py-2">Về trang chủ</div>
            </div>
            <div className="text-3xl py-2 uppercase text-blue-600 font-semibold">
              {course?.course_title}
            </div>
          </div>

          <ContentCourse
            sections={sections}
            setLink={setLink}
            setTitle={setTitle}
            setOpenDraw={setOpenDraw}
          />
        </div>

        <div
          style={{ zIndex: "999999" }}
          className="p-3 mobile-title xl:hidden col-span-4 flex items-center bg-blue-600 text-white font-bold text-xl"
        >
          {openDraw ? (
            <MdCancelPresentation
              className="ml-2 text-3xl"
              onClick={() => setOpenDraw(false)}
            />
          ) : (
            <IoReorderThreeSharp
              className="ml-2 text-3xl"
              onClick={() => setOpenDraw(true)}
            />
          )}

          <div className="text-center w-full"> KHÓA HỌC TM</div>
        </div>

        <div className="right-video col-span-4 xl:col-span-3  mt-2">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              playing={true}
              controls={true}
              url={link}
              width="100%"
              height="100%"
            />
          </div>
          <div className="text-xl font-semibold mt-1">{title}</div>
        </div>
      </div>

      <DrawMobile
        sections={sections}
        course={course}
        openDraw={openDraw}
        setOpenDraw={setOpenDraw}
        setLink={setLink}
        setTitle={setTitle}
      />
    </div>
  );
};

export default WatchVideo;
