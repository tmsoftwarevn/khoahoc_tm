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
  //text-white bg-gradient-to-tr from-orange-400 to-pink-500
  return (
    <>
      <div className="border-t border-gray-400 text-white bg-gradient-to-tr from-blue-400 to-gray-400">
        <div className="container px-2 py-4  lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            <div className="col-span-1 ">
              <p className="ft font-semibold text-lg">
                KHÓA HỌC TM
              </p>
              <div className=" text-sm italic mb-3">
                (Hoạt động từ 8h - 17h, thứ 2 - thứ 7)
              </div>
              <ul className="ul-ft text-sm">
                <li className="cursor-pointer mb-3">
                  <IoCall
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                    }}
                  />
                  Gọi đặt hàng: 0979249222
                </li>
                <li
                  onClick={() => {
                    window.open("mailto:" + "mail@gmail.com");
                  }}
                  className="cursor-pointer mb-3"
                >
                  <IoMdMail
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                    }}
                  />
                  tmbrandingvn@gmail.com
                </li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <p className="ft font-semibold text-lg">HỖ TRỢ KHÁCH HÀNG</p>
              <div className="capitalize text-sm grid gap-2">
                <Link
                  href={"/thong-tin/huong-dan-dat-hang"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Hướng dẫn đặt hàng
                </Link>

                <Link
                  href={"/thong-tin/phuong-thuc-thanh-toan"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Phương thức thanh toán
                </Link>
                <Link
                  href={"/thong-tin/phuong-thuc-van-chuyen"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Phương thức vận chuyển
                </Link>
                <Link
                  href={"/thong-tin/chinh-sach-doi-tra"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Chính sách đổi trả
                </Link>
                <Link
                  href={"/thong-tin/chinh-sach-bao-mat"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Chính sách bảo mật
                </Link>
                <Link
                  href={"/thong-tin/dieu-khoan-su-dung"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Điều khoản sử dụng
                </Link>
              </div>
            </div>

            <div className="col-span-1">
              <p className="ft font-semibold uppercase text-lg">
                Vì sao chọn TM Book
              </p>
              <div className="capitalize text-sm grid gap-2">
                <Link
                  href={"/gioi-thieu"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Giới thiệu TM Book
                </Link>

                <Link
                  href={"/thong-tin/bao-doc-sach-hay"}
                  className="cursor-pointer hover:pl-3 duration-200"
                >
                  Bao đọc sách hay
                </Link>
              </div>
            </div>

            {/* <div className="col-span-1">
              <p className="ft font-semibold uppercase text-lg">FANPAGE</p>
              <Fanpage />
            </div> */}
            <div className="col-span-1">
              <p className="ft font-semibold uppercase text-lg">
                Kết nối với TM Book
              </p>

              <div className="center-icon mt-5">
                <div
                  className="g-fb"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/tmsoftwarevietnam",
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
                  // onClick={() =>
                  //     window.open('https://zalo.me/0785226236', "_blank")
                  // }
                >
                  <SiZalo className="zalo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 py-3 px-2 text-xs !text-black">
          <div className="container">
            <div className="w-fit mx-auto text-center">
              © 2024 - Bản quyền của Công ty TNHH Quảng Cáo Truyền Thông TM
              Branding
            </div>
            <div className="w-fit mx-auto text-center">
              Giấy chứng nhận Đăng ký Kinh doanh số 0316554974 do Sở Kế hoạch và
              Đầu tư Thành phố Hồ Chí Minh cấp ngày 23/10/2020
            </div>
          </div>
        </div>
      </div>

      <Social />
    </>
  );
};

export default Footer;
