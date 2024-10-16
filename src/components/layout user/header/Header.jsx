"use client";

import Navbar1 from "./Navbar1";
import { Button, Input, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import ResponsiveHeader from "./Responsive";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdown, setDropdown] = useState([{name:"khóa marketing", slug:"slug"}]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
   
  }, []);

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
    //from-orange-300 to-orange-500
    <div className="bg-gradient-to-tr from-blue-400 to-green-200 text-white ">
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

          <ul className="hidden lg:flex gap-10 uppercase list-none">
            {/* <li
              className="group relative cursor-pointer"
              onClick={() => router.push("/")}
            >
              <span>trang chủ</span>
              <span
                className={
                  pathname === "/"
                    ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
              <span
                className={
                  pathname === "/"
                    ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
            </li> */}

            <li
              className="group relative cursor-pointer"
              onClick={() => router.push("/gioi-thieu")}
            >
              <span>giới thiệu</span>
              <span
                className={
                  pathname === "/gioi-thieu"
                    ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
              <span
                className={
                  pathname === "/gioi-thieu"
                    ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
            </li>

            <li className="group relative cursor-pointer uppercase">
              <div className="dropdown relative inline-flex group">
                <div
                  id="dropdown-hover"
                  type="button"
                  className="relative dropdown-toggle uppercase inline-flex justify-center items-center gap-2 text-white  cursor-pointer text-center shadow-xs transition-all duration-500 "
                >
                  <span  onClick={() => router.push("/khoa-hoc")}>Khóa học</span>
                  <span
                    className={
                      pathname.startsWith("/khoa-hoc")
                        ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                        : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    }
                  ></span>
                  <span
                    className={
                      pathname.startsWith("/khoa-hoc")
                        ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                        : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
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
                                router.push(`/the-loai/${item.slug}`)
                              }
                              className="block px-3 py-2 hover:bg-orange-600 duration-150 text-black hover:text-white "
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

            

            <li className="group relative cursor-pointer">
              <span onClick={() => router.push("/tin-tuc")}>Tin tức</span>
              <span
                className={
                  pathname.startsWith("/tin-tuc")
                    ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
              <span
                className={
                  pathname.startsWith("/tin-tuc")
                    ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
            </li>

            <li
              className="group relative cursor-pointer"
              onClick={() => router.push("/lien-he")}
            >
              <span>Liên hệ</span>
              <span
                className={
                  pathname === "/lien-he"
                    ? "absolute -bottom-2 left-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
              <span
                className={
                  pathname === "/lien-he"
                    ? "absolute -bottom-2 right-1/2 w-3/6 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                    : "absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-orange-600 group-hover:w-3/6"
                }
              ></span>
            </li>
          </ul>

          <div className="hidden lg:block">
            <Space
              direction="vertical"
              className="w-full sm:w-[300px] max-w-full"
            >
              <Space.Compact
                style={{
                  width: "100%",
                }}
              >
                <Input
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm"
                  onKeyDown={handleKeyPress}
                  className="!outline-none !border-none !shadow-none"
                />
                <Button
                  onClick={() => handleSearch()}
                  className="!bg-blue-500 !outline-none !hover:border-none !border-none !hover:outline-none !hover:bg-orange-100 !hover:text-white "
                >
                  <FaSearch className="text-white" />
                </Button>
              </Space.Compact>
            </Space>
          </div>

          <div onClick={() => setOpen(!open)} className="lg:hidden">
            <VscThreeBars className="text-4xl" />
          </div>
        </div>

        <ResponsiveHeader dropdown={dropdown} open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
