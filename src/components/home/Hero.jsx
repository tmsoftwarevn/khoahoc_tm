
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./hero.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Hero = (props) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hero py-4 px-2 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="col-span-1">
            <h1 className="mb-5 lg:text-3xl font-bold leading-tight sm:leading-tight  md:leading-tight">
              Free and Open-Source Next.js Template for Startup & SaaS
            </h1>
            <p className="text-base !leading-relaxed text-md">
              Startup is free Next.js template for startups and SaaS business
              websites comes with all the essential pages, components, and
              sections you need to launch a complete business website,
              built-with Next 13.x and Tailwind CSS.
            </p>
            <button className="rounded-full px-5 py-2 duration-150 bg-blue-600 text-white hover:bg-blue-500">
              Xem thêm
            </button>
          </div>

          <div className="col-span-1">
            <div className="relative">
              <Image
                loading="lazy"
                src="/124.jpg"
                alt={"ds"}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="w-full h-auto "
              />
              <span
                  className="video-play-button"
                  onClick={() => setOpen(true)}
                >
                  <span></span>
                </span>
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

    </div>
    
  );
};

export default Hero;
