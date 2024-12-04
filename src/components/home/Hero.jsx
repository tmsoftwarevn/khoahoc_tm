import { useRouter } from "next/navigation";
import Image from "next/image";
import "./hero.scss";
import ToolTipButton from "@/ui/custom/ToolTipButton";
import ButtonHover from "@/ui/custom/ButtonHover";

import Slider from "react-slick";

let settings = {
  dots: true,
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 10000,
  cssEase: "linear",
  pauseOnHover: true,
};

const Hero = (props) => {
  const router = useRouter();
  const { isOpen, setOpen } = props;

  // if arr = 1 thì double
  let arr = [1, 2];

  return (
    <>
      <Slider {...settings}>
        {arr.map((item, idx) => {
          return (
            <div key={`ewe${idx}`}>
              <div className="h-full lg:h-[calc(100vh-107px)] w-full bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center pt-16 sm:py-12">
                <div className="container">
                  <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 gap-8 ">
                    <div className="px-6 sm:text-center lg:col-span-6 lg:flex lg:items-center lg:text-left">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                              Early Access
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                              <span className="sm:text-6xl"></span> Wireless
                              Bluetooth Earbuds
                              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                                StellarGlo
                              </span>
                              <br />
                              go beyond sound.
                            </h1>
                          </div>
                          <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Immerse yourself in superior audio quality with the
                            StellarGlo Wireless Bluetooth Earbuds. These sleek
                            and lightweight earbuds deliver crystal-clear sound
                            and rich bass.
                          </p>
                        </div>
                        <div className="border-t border-gray-700" />
                        <div className="flex space-x-4 items-center text-white">
                          <div className="hidden md:flex items-center space-x-2">
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

                          {/* <ToolTipButton /> */}
                          <ButtonHover />

                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full col-span-6">
                      <div className="relative">
                        <Image
                          loading="lazy"
                          //src="/124.jpg"
                          src={idx %2 === 0 ? "/125.jpg" : "/123.jpg"}
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
            </div>
          );
        })}
      </Slider>
      {/* <div className="h-full lg:h-[calc(100vh-107px)] w-full bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center pt-16 sm:py-12">
        <div className="container">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 gap-8 ">
            <div className="px-6 sm:text-center lg:col-span-6 lg:flex lg:items-center lg:text-left">
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
                  <div className="hidden md:flex items-center space-x-2">
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
                  

                  <ToolTipButton />

                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full col-span-6">
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
      </div> */}
    </>
  );
};

export default Hero;
