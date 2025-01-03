import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const CourseSection = ({ sectionDetails, setOpen, idx, slug }) => {
  const { sectionKey, lectures, count_section } = sectionDetails;
  const router = useRouter();
  const [open, toggleOpen] = useState(false);
  const handleClick = () => {
    toggleOpen(!open);
  };

  const check_role = (idx) => {
    // check token có truy cập được không
    let token = sessionStorage.getItem("token");
    if (token) {
      // xem video
      router.push(`/watch?s=${slug}&idVideo=${idx}`);
    } else {
      Swal.fire("Bạn cần đăng nhập để xem !");
    }
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
          <div className="hidden sm:block">{count_section} Bài học</div>
        </div>
      </AccordionSummary>

      <AccordionDetails className="border-t border-gray-500">
        {lectures.map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer py-2">
                <IoIosPlayCircle className="mr-2 text-blue-600 text-lg" />
                <span
                  onClick={() => check_role(item?.lecture_quiz_id)}
                  className="hover:text-blue-600 duration-100"
                >
                  {item.l_title}
                </span>
              </div>

              {/* {item.can_be_previewed ? (
                <span 
                onClick={() => setOpen(true)}
                className="hidden sm:block cursor-pointer text-blue-600">
                  Xem trước
                </span>
              ) : (
                <span></span>
              )} */}
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseSection;
