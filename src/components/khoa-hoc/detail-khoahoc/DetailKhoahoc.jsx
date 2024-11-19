import HeaderCourse from "./HeaderCourse";
import Sticky from "react-stickynode";
import StickyCardContent from "@/components/card/StickyCardContent";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import ContentCourse from "./ContentCourse";

const DetailKhoahoc = (props) => {
  const { detail } = props;
  const [isOpen, setOpen] = useState(false);
  const customVideoUrl =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div>
      <div className="bg-blue-600 relative grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-2 ">
          <HeaderCourse />
        </div>

        <div className="col-span-3 lg:col-span-1 relative w-full">
          <div className="lg:absolute p-3 right-0 w-full">
            <Sticky innerZ={5} top={10}>
              <StickyCardContent setOpen={setOpen} />
            </Sticky>
          </div>
        </div>
      </div>

      <div className="px-2 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <ContentCourse setOpen = {setOpen} />
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="GUGkvPT5TZA"
        onClose={() => setOpen(false)}
      />

      {/* <ModalVideo
        channel="custom"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        url={customVideoUrl}
      >
        <div className="custom-video-container">
          <video
            src={customVideoUrl}
            controls
            width="100%"
            height="100%"
            autoPlay
          />
        </div>
      </ModalVideo> */}

    </div>
  );
};

export default DetailKhoahoc;
