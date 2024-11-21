import { useRouter } from "next/navigation";
import Image from "next/image";
import "./hero.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Hero = (props) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className=" container p-8 sm:p-10 lg:py-24">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 lg:gap-16 z-30">
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
              <span className="video-play-button" onClick={() => setOpen(true)}>
                <span></span>
              </span>
            </div>

            <div className="col-span-1 text-white relative z-30">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="mt-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <button className="rounded bg-blue-600 duration-100 hover:bg-blue-700 px-4 py-2">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="GUGkvPT5TZA"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Hero;
