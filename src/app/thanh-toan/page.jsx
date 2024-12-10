"use client";

import Image from "next/image";
import Footer from "@/components/layout user/footer/Footer";
import Header from "@/components/layout user/header/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

const ThanhToan = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    let course = localStorage.getItem("course");
    setName(course);
  }, []);


  return (
    <div>
      <Header />

      <div className="container">
        <div className="mt-3 mb-5">
          <div class="bg-gradient-to-r py-10 from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 ">
            <div class="container mx-auto">
              <div class="flex items-center justify-center">
                <div class="text-center text-white">
                  <h1 class="text-3xl lg:text-5xl font-bold">
                    {name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-9/12 mx-auto mb-10">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <th
                  colSpan={2}
                  className="text-center py-2 bg-red-600 text-white text-lg font-semibold border border-gray-300"
                >
                  THÔNG TIN CHUYỂN KHOẢN
                </th>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Chủ tài khoản
                </td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">
                  Nguyễn Tăng Hải
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Số tài khoản
                </td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">
                  123456789
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ngân hàng</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">
                  VCB
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Số tiền</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">
                  5.000.000 VND
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Nội dung</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">
                  SDT + EMAIL + TÊN KHÓA HỌC
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="text-center border border-gray-300 px-4 py-2 text-blue-600"
                >
                  *Lưu ý: Nhập nội dung chính xác để đơn hàng kích hoạt. Thông
                  tin tài khoản đăng nhập sẽ gửi về email. Nếu có thắc mắc gì
                  hãy liên hệ với chúng tôi qua SĐT: 123456789
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThanhToan;
