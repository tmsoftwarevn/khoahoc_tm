import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

const CourseSection = ({
  sectionDetails,
  setLink,
  setOpenDraw,
  setTitle,
  idx,
}) => {
  const { title, items } = sectionDetails;
  const [idActive, setActive] = useState("");

  const [open, toggleOpen] = useState(false);
  const handleClick = () => {
    toggleOpen(!open);
  };

  const handleShowVideo = (e, item) => {
    e.stopPropagation();
    setLink(item.video_url);
    setOpenDraw(false); ///  tắt draw mobile
    setTitle(item.title);
    console.log("checllll", item);
    setActive(item.id);
  };
  console.log("idddđ", idActive);

  return (
    <Accordion expanded={open} className="w-full rounded-none drop-shadow-none">
      <AccordionSummary
        className="flex-row-reverse w-full text-black font-semibold bg-gray-50"
        expandIcon={<ExpandMore className="text-black font-semibold mr-3" />}
        onClick={handleClick}
      >
        <div className="flex justify-between w-full ">
          <div className="">
            {idx + 1}. {title}
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails className="border-t border-gray-500">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer py-2">
                <IoIosPlayCircle className="mr-2 text-blue-600 text-lg" />
                <span
                  onClick={(e) => handleShowVideo(e, item)}
                  className="hover:text-blue-600 duration-100"
                >
                  {item.title}
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
