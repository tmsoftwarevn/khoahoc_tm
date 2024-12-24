import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

const CourseSection = ({
  sectionDetails,
  setLink,
  setOpenDraw,
  setTitle,
  idx,
}) => {
  const { sectionKey, lectures } = sectionDetails;
  const router = useRouter();

  const searchParams = useSearchParams();
  const slug_course = searchParams.get("s");

  const [idVideo, setId] = useState();
  const [open, toggleOpen] = useState(true);
  const handleClick = () => {
    toggleOpen(!open);
  };

  useEffect(() =>{
    setId(searchParams.get("idVideo"))
  },[searchParams.get("idVideo")])


  const handleShowVideo = (e, item) => {
    e.stopPropagation();
    setLink(item?.video_url);
    setOpenDraw(false); ///  tắt draw mobile
    setTitle(item?.l_title);

    router.push(`/watch?s=${slug_course}&idVideo=${item?.lecture_quiz_id}`);
  };

  return (
    <Accordion expanded={open} className="w-full rounded-none drop-shadow-none">
      <AccordionSummary
        className="flex-row-reverse w-full text-black font-semibold bg-gray-50"
        expandIcon={<ExpandMore className="text-black font-semibold mr-3" />}
        onClick={handleClick}
      >
        <div className="flex justify-between w-full ">
          <div className="">
            {idx + 1}. {sectionKey}
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails className="border-t border-gray-500">
        {lectures.map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer py-2">
                <IoIosPlayCircle className="mr-2 text-blue-600 text-lg" />
                <span
                  onClick={(e) => handleShowVideo(e, item)}
                  className={
                    +item?.lecture_quiz_id === +idVideo
                      ? "text-blue-600"
                      : "hover:text-blue-600 duration-100"
                  }
                >
                  {item.l_title}
                </span>
              </div>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseSection;
