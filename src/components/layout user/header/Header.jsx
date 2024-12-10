"use client";

import Navbar1 from "./Navbar1";
import { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Responsive from "@/components/layout user/header/Responsive";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdown, setDropdown] = useState([
    { name: "khóa học marketing", slug: "slug" },
    { name: "khóa học thiết kế đồ họa", slug: "slugeee" },
  ]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {}, []);

  const handleSearch = () => {
    console.log("vvvvv", searchValue);
    router.push(`/tim-kiem?text=${searchValue}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    //sticky top-0 left-0 w-full z-50 shadow
    //bg-gradient-to-tr from-blue-400 to-green-200
    //bg-[url('/bg-header.jpg')] bg-cover bg-center bg-no-repeat
    <div className="border-b border-gray-200">
      <div className="container">
        <Navbar1 />
        <div className="flex justify-between items-center pb-2 px-2 xl:px-0">
          <div
            className="w-[150px] cursor-pointer z-50 relative"
            onClick={() => router.push("/")}
          >
            <Image
              src="/logo.jpg"
              alt="hfh"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          <ul className="hidden lg:flex gap-5 uppercase list-none ">
            <li
              onClick={() => router.push("/gioi-thieu")}
              className={
                pathname.startsWith("/gioi-thieu")
                  ? "cursor-pointer px-4 py-2 rounded shadow-xs relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white bg-blue-600 text-white"
                  : "cursor-pointer px-4 py-2 rounded shadow-xs text-gray-700 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white "
              }
            >
              <div className="flex items-center gap-1">
                <Image
                  //src="/icon_1.svg"
                  src="/gioithieu.png"
                  alt="hfh"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[20px] h-auto object-cover"
                />
                giới thiệu
              </div>
            </li>

            <li className="group relative cursor-pointer uppercase">
              <div className="dropdown relative inline-flex group">
                <div
                  onClick={() => router.push("/khoa-hoc")}
                  id="dropdown-hover"
                  type="button"
                  //className="relative dropdown-toggle uppercase inline-flex justify-center items-center gap-2   cursor-pointer text-center shadow-md transition-all duration-500 cursor-pointer px-4 py-2 rounded shadow-md text-gray-700 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white "
                  className={
                    pathname.startsWith("/khoa-hoc")
                      ? "dropdown-toggle uppercase inline-flex justify-center items-center gap-2   cursor-pointer text-center shadow-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white bg-blue-600 text-white"
                      : "dropdown-toggle uppercase inline-flex justify-center items-center gap-2   cursor-pointer text-center shadow-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded text-gray-700 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white"
                  }
                >
                  <div className="flex items-center gap-1">
                    <Image
                      //src="/icon_2.svg"
                      src='/course.png'
                      alt="hfh"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-[20px] h-auto object-cover"
                    />
                    Khóa học
                  </div>
                  <span
                    className={
                      pathname.startsWith("/khoa-hoc")
                        ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"
                        : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"
                    }
                  ></span>
                  <span
                    className={
                      pathname.startsWith("/khoa-hoc")
                        ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"
                        : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"
                    }
                  ></span>

                  <svg
                    className="dropdown-open:rotate-180 w-2.5 h-2.5 text-white"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div
                  className="dropdown-menu shadow-lg bg-white absolute z-50 top-full w-60 hidden group-hover:block"
                  aria-labelledby="dropdown-hover"
                >
                  <ul className="text-sm list-none !ml-0">
                    {dropdown &&
                      dropdown.map((item) => {
                        return (
                          <li key={item.slug}>
                            <span
                              onClick={() =>
                                router.push(`/khoa-hoc/${item.slug}`)
                              }
                              className="block px-3 py-2 hover:bg-blue-600 duration-150 text-black hover:text-white "
                            >
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </li>

            <li
              onClick={() => router.push("/tin-tuc")}
              className={
                pathname.startsWith("/tin-tuc")
                  ? "cursor-pointer px-4 py-2 rounded shadow-xs relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white bg-blue-600 text-white"
                  : "cursor-pointer px-4 py-2 rounded shadow-xs text-gray-700 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white "
              }
            >
              <div className="flex items-center gap-1">
                <Image
                  //src="/icon_3.svg"
                  src='/blog.png'
                  alt="hfh"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[20px] h-auto object-cover"
                />
                Tin tức
              </div>
            </li>

            <li
              onClick={() => router.push("/lien-he")}
              className={
                pathname.startsWith("/lien-he")
                  ? "cursor-pointer px-4 py-2 rounded shadow-xs relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white bg-blue-600 text-white"
                  : "cursor-pointer px-4 py-2 rounded shadow-xs text-gray-700 relative isolation-auto z-10 border-b border-gray before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-175 overflow-hidden before:hover:duration-700 hover:text-white "
              }
            >
              <div className="flex items-center gap-1">
                <Image
                  //src="/icon_4.svg"
                  src='/contact.png'
                  alt="hfh"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[20px] h-auto object-cover"
                />
                Liên hệ
              </div>
            </li>
          </ul>

          <div className="hidden lg:block">
            <div className="relative">
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                  width={17}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    strokeWidth="1.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearchValue(e.target.value)}
                className="rounded-full px-10 py-2 border-2 border-blue-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-white transition-all duration-300 shadow-md"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>

          <div onClick={() => setOpen(!open)} className="lg:hidden">
            <VscThreeBars className="text-4xl text-blue-600" />
          </div>
        </div>

        {/* <ResponsiveHeader dropdown={dropdown} open={open} setOpen={setOpen} /> */}
        {open ? <Responsive /> : <></>}
      </div>
    </div>
  );
};

export default Header;
