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
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
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
      /> */}
      <div className="h-full w-full bg-blue-400 pt-16 sm:py-12">
        <div className="container">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Early Access
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span className="sm:text-6xl"></span> Wireless Bluetooth
                      Earbuds
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        StellarGlo
                      </span>
                      <br />
                      go beyond sound.
                    </h1>
                  </div>
                  <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Immerse yourself in superior audio quality with the
                    StellarGlo Wireless Bluetooth Earbuds. These sleek and
                    lightweight earbuds deliver crystal-clear sound and rich
                    bass.
                  </p>
                </div>
                <div className="border-t border-gray-700" />
                <div className="flex space-x-4 items-center text-white">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <img
                        loading="lazy"
                        width={400}
                        height={400}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/29.jpg"
                      />
                      <img
                        loading="lazy"
                        width={400}
                        height={400}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/90.jpg"
                      />
                      <img
                        loading="lazy"
                        width={100}
                        height={100}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                      />
                      <img
                        loading="lazy"
                        width={200}
                        height={200}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                      />
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>
                  <div className="h-4 border-l border-gray-700" />
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div className="h-4 border-l border-gray-700" />
                  <div className="cursor-pointer rounded border border-white py-2 px-5 duration-200 hover:bg-blue-600">Xem thêm</div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full col-span-6">
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
      </div>
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
