import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

const CourseSection = ({ sectionDetails }) => {
  const { title, items } = sectionDetails;

  const [open, toggleOpen] = useState(false);
  const handleClick = () => {
    toggleOpen(!open);
  };

  return (
    <Accordion expanded={open} className="w-full rounded-none drop-shadow-none">
      <AccordionSummary
        className="flex-row-reverse w-full text-black font-semibold bg-gray-50"
        expandIcon={<ExpandMore className="text-black font-semibold mr-3" />}
        onClick={handleClick}
      >
        <div className="flex justify-between w-full ">
          <div className="">{title}</div>
          <div className="hidden sm:block">2 Bài học</div>
        </div>
      </AccordionSummary>

      <AccordionDetails className="border-t border-gray-500">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer py-2">
                <IoIosPlayCircle className="mr-2 text-blue-600 text-lg" />
                <span className="hover:text-blue-600 duration-100">
                  {item.title}
                </span>
              </div>

              {item.can_be_previewed ? (
                <span className="hidden sm:block cursor-pointer text-blue-600">
                  Review
                </span>
              ) : (
                <span></span>
              )}
              
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseSection;
