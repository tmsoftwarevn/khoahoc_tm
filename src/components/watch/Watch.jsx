import ReactPlayer from "react-player";
import CourseContent from "../../components/course-content/CourseContent";
import "./watchvideo.scss";
import MenuVideo from "./CourseContent";
import { IoIosArrowBack } from "react-icons/io";

import { IoReorderThreeSharp } from "react-icons/io5";
import MobileDrawer from "./DrawMobile";
import { useEffect, useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { useRouter } from "next/navigation";

const WatchVideo = () => {
  const router = useRouter();
  const [openDraw, setOpenDraw] = useState(false);
  const [process, setProcess] = useState(0);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState();


  return (
    <>
      <div className="watch-video overflow-hidden">
        <div className="grid grid-cols-3 gap-5">
          <div className="left-video col-span-1 hidden xl:block">
            <div className="text-white bg-blue-600 w-full p-3 font-bold text-center ">
              KHÓA HỌC TM
            </div>
            <div className="box shadow-md p-2">
              <div
                className="flex items-center cursor-pointer hover:text-blue-600"
                onClick={() => navigate("/")}
              >
                <IoIosArrowBack className="text-xs" />
                <p className="py-2">Về trang chủ</p>
              </div>
              <p className="text-3xl py-2">
                Content Marketing | Digital Marketing
              </p>

              <ProgressBar
                height="5px"
                bgColor="blue"
                customLabel=" "
                completed={process}
                className="pt-3"
              />
              <p className="pt-2 mb-3">Đã hoàn thành {process}%</p>
            </div>

            <MenuVideo
              totalChecked={totalChecked}
              setTotalChecked={setTotalChecked}
              setLink={setLink}
              setTitle={setTitle}
              setOpenDraw={setOpenDraw}
            />
          </div>

          <div
            style={{ zIndex: "999999" }}
            className="p-3 mobile-title xl:hidden flex items-center bg-blue-600 text-white font-bold text-xl"
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

          <div className="right-video col-xl-9 mt-2">
            <div className="name-baihoc">{title}</div>
            {/* <video controls crossorigin="anonymous">
              <source
                src= {link}
                type="video/mp4"
              />
            </video> */}

            <ReactPlayer
              className="video-rp"
              playing={true}
              controls={true}
              url={link}
            />

            <div className="flex justify-between px-3">
              <button className="mt-3 px-3 py-1 text-white bg-blue-400 hover:bg-blue-600 rounded">
                Trước
              </button>
              <button className="mt-3 px-3 py-1 text-white bg-blue-400 hover:bg-blue-600 rounded">
                Tiếp
              </button>
            </div>
          </div>
        </div>

        <MobileDrawer
          totalChecked={totalChecked}
          setTotalChecked={setTotalChecked}
          openDraw={openDraw}
          setOpenDraw={setOpenDraw}
          process={process}
          setLink={setLink}
          setTitle={setTitle}
        />
      </div>
    </>
  );
};

export default WatchVideo;
