import HeaderCourse from "./HeaderCourse";
import Sticky from "react-stickynode";
import StickyCardContent from "@/components/card/StickyCardContent";
import ModalVideo from "react-modal-video";
import { useEffect, useState } from "react";
import ContentCourse from "./ContentCourse";
import "./detail.scss";
import { call_detail_course } from "@/api/CallApi";

const DetailKhoahoc = (props) => {
  const { setOpen, slug, setUrl } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const [detail, setDetail] = useState();
  const [course, setCourse] = useState();
  const [listVideo, setListVideo] = useState();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const call_data = async () => {
      let data = await call_detail_course(slug);
      if (data) {
        setDetail(data);
        setCourse(data?.course);
        setListVideo(data?.curriculum);
        custom_arr_section(data?.curriculum?.sections);

        setUrl(data?.video?.video_path);  // set để bật review mỗi khóa học
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
    <div>
      <div className="bg-blue-600 relative grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-2 ">
          <HeaderCourse course={course} />
        </div>

        <div className="col-span-3 lg:col-span-1 relative w-full">
          <div className="hidden lg:block lg:absolute p-3 right-0 w-full">
            <Sticky innerZ={5} top={10}>
              <StickyCardContent
                setUrl={setUrl}
                setOpen={setOpen}
                course={course}
                listVideo={listVideo}
              />
            </Sticky>
          </div>
          <div className="lg:hidden">
            <StickyCardContent
              setUrl={setUrl}
              setOpen={setOpen}
              course={course}
              listVideo={listVideo}
            />
          </div>
        </div>
      </div>

      <div className="px-2 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <ContentCourse
            slug={slug}
            sections={sections}
            setOpen={setOpen}
            listVideo={listVideo}
          />

          {/* // description */}
          <div className="detail">
            <div className="detail__content">
              <div className="text-xl mt-10 font-bold text-blue-600">
                CHI TIẾT
              </div>
              <div className="border border-black-400 mb-5"></div>
              <div
                className="text-md"
                dangerouslySetInnerHTML={{
                  __html: course?.overview,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ModalVideo
        channel="custom"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        url={customVideoUrl}
      >
      </ModalVideo> */}
    </div>
  );
};

export default DetailKhoahoc;
