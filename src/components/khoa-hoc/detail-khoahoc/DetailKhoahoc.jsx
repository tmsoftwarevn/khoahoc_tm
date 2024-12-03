import HeaderCourse from "./HeaderCourse";
import Sticky from "react-stickynode";
import StickyCardContent from "@/components/card/StickyCardContent";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import ContentCourse from "./ContentCourse";
import DOMPurify from "dompurify";
import "./detail.scss";

const fake_data =
  "<p><strong>Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more? </strong></p><p>If you’re looking to learn Python for the very <strong>first time</strong> or need a <strong>quick brush-up</strong>, this is the course for you! </p><p>Python has rapidly become one of the <strong>most popular programming languages </strong>around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes <strong>over $100,000 </strong>- this number is only going to grow in the coming years.</p><p>The best part? Python is one of the <strong>easiest coding languages </strong>to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an <strong>absolute pro</strong> at programming!</p><p>This course will cover <strong>all the basics</strong> and <strong>several advanced concepts</strong> of Python. We’ll go over:</p><ul><li><p>The fundamentals of Python programming</p></li><li><p>Writing and Reading to Files</p></li><li><p>Automation of Word and Excel Files</p></li><li><p>Web scraping with BeautifulSoup4</p></li><li><p>Browser automation with Selenium</p></li><li><p>Data Analysis and Visualization with MatPlotLib</p></li><li><p>Regex parsing and Task Management</p></li><li><p>GUI and Gaming with Tkinter</p></li><li><p>And much more!</p></li></ul><p>If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for <strong>almost 4 years,</strong> I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over<strong> 200,000+ students </strong>from over<strong> 200 countries</strong> jumpstart their programming journeys through my courses. </p><p>Here’s what some of my students have to say:</p><ul><li><p>“I wish I started programming at a younger age like Avi.  This Python course was excellent for those that cringe at the thought of starting over from scratch with attempts to write programs once again. Python is a great building language for any beginner programmer. Thank you Avi!”</p><p><br></p></li><li><p>“I had no idea about any programming language. With Avi's lectures, I'm now aware of several python concepts and I'm beginning to write my own programs. Avi is crisp and clear in his lectures and it is easy to catch the concepts and the depth of it through his explanations. Thanks, Avi for the wonderful course, You're awesome! It's helping me a lot :)”</p><p><br></p></li><li><p>\"Videos are short and concise and well-defined in their title, this makes them easy to refer back to when a refresher is needed. Explanations aren't convoluted with complicated examples, which adds to the quick pace of the videos. I am very pleased with the decision to enroll in this course. Not only has it increased the pace I'm learning Python but I actively look forward to continuing the course, whenever I get the chance. Avi is friendly and energetic, absolutely delightful as an instructor.”</p></li></ul><p>So what are you waiting for? <strong>Jumpstart your programming journey</strong> and dive into the world of Python by<strong> enrolling in this course today!</strong></p>";

const DetailKhoahoc = (props) => {
  const { detail } = props;
  const [isOpen, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const customVideoUrl =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div>
      <div className="bg-blue-600 relative grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-2 ">
          <HeaderCourse />
        </div>

        <div className="col-span-3 lg:col-span-1 relative w-full">
          <div className="hidden lg:block lg:absolute p-3 right-0 w-full">
            <Sticky innerZ={5} top={10}>
              <StickyCardContent setOpen={setOpen} />
            </Sticky>
          </div>
          <div className="lg:hidden">
            <StickyCardContent setOpen={setOpen} />
          </div>
        </div>
      </div>

      <div className="px-2 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <ContentCourse setOpen={setOpen} />

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
                  __html: fake_data,
                }}
              />
            </div>
          </div>

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
