import { SiZalo } from "react-icons/si";
import "./footer.scss";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import Fanpage from "./Fanpage";
import Link from "next/link";
import Social from "@/components/social/Social";

const Footer = () => {
  return (
    <>
      <div className="footer py-4 text-white ">
        <div className="container px-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <p className="ft font-semibold text-xl">THÔNG TIN LIÊN HỆ</p>

              <ul className="ul-ft">
                <li>
                  <MdLocationOn
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      marginBottom: "3px",
                    }}
                  />
                  27 Trần Nhật Duật- Phường 5-Đà Lạt, Việt Nam
                </li>
                <li className="cursor-pointer">
                  <IoCall
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      marginBottom: "3px",
                    }}
                  />
                  078 666 7131
                </li>
                <li className="cursor-pointer">
                  <IoMdMail
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      marginBottom: "3px",
                    }}
                  />
                  miemietoystore185@gmail.com
                </li>
                <li className="cursor-pointer">
                  <BiWorld
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      marginBottom: "3px",
                    }}
                  />
                  dochoitreemmiemie.com
                </li>
              </ul>

              <div className="center-icon ">
                <div
                  className="g-fb"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/dochoitreemmiemie?locale=vi_VN",
                      "_blank"
                    )
                  }
                >
                  <FaFacebookF className="fb" />
                </div>

                <div
                  className="g-fb"
                  // onClick={() =>
                  //     window.open(process.env.REACT_APP_LINK_YOUTUBE, "_blank")
                  // }
                >
                  <FaYoutube className="yt" />
                </div>
                <div
                  className="g-fb"
                  // onClick={() =>
                  //     window.open(process.env.REACT_APP_LINK_TIKTOK, "_blank")
                  // }
                >
                  <FaTiktok className="tiktok" />
                </div>
                <div
                  className="g-fb"
                  onClick={() =>
                    window.open("https://zalo.me/0785226236", "_blank")
                  }
                >
                  <SiZalo className="zalo" />
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <p className="ft font-semibold text-xl">DANH MỤC</p>
              <div className="list-none uppercase grid gap-2">
                <Link href={"/"} className="cursor-pointer">
                  trang chủ
                </Link>

                <Link href={"/gioi-thieu"} className="cursor-pointer">
                  giới thiệu
                </Link>
                <Link href={"/shop"} className="cursor-pointer">
                  Shop
                </Link>
                <Link href={"/tin-tuc"} className="cursor-pointer">
                  tin tức
                </Link>
                <Link href={"/lien-he"} className="cursor-pointer">
                  liên hệ
                </Link>
              </div>
            </div>

            <div className="col-span-1 inline-block overflow-hidden">
              <p className="ft text-xl font-semibold">FANPAGE</p>

              {/* <Fanpage /> */}
            </div>
          </div>
          <div
            onClick={() => window.open("https://tmsoftware.vn/", "_blank")}
            className="w-fit mx-auto text-xs mt-3 text-gray-100 cursor-pointer"
          >
            Design by TM Software
          </div>
        </div>
      </div>

      {/* <Social /> */}

    </>
  );
};

export default Footer;
