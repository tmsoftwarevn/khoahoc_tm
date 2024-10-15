"use client";
import { useEffect, useState } from "react";
import BreadcrumbCustom from "@/components/breadcrum/BreadCrumCustom";

import "./contact.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import AlertErr from "../alert/AlertErr";
import { message } from "antd";

const Contact = () => {
  const [string, setString] = useState(["Liên hệ"]);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("Hãy nhập đầy đủ và đúng các thông tin !");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const isVietnamesePhoneNumber = (number) => {
    return /(03|05|07|08|09)+([0-9]{8})\b/.test(number);
  };
  const call_save_lienhe = async () => {
    if (!validateEmail(email) || !isVietnamesePhoneNumber(phone)) {
      setOpen(true);
      return;
    }

    const data = await fetch(`${process.env.URL_BACKEND}/api/v1/lienhe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        note,
      }),
    });

    const res = await data.json();
    if (res && res.EC === 1) {
      Swal.fire("Liên hệ thành công!");
    } else {
      message.error("Liên hệ thất bại !");
    }
    // gửi email
    const mail = await fetch(`${process.env.URL_BACKEND}/api/v1/mail-lienhe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        note,
      }),
    });
  };
  return (
    <div className="px-2 pb-5">
      <div className="container">
        {/* <BreadcrumbCustom listBread={string} /> */}

        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 gap-5 h-full mt-5">
          <div className="col-span-1 h-full overflow-hidden">
            {/* <div className="font-black text-5xl text-center mb-2">
              Liên hệ với chúng tôi
            </div> */}

            <div className="mt-5 h-full ">
             
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0925658029205!2d106.78815537451757!3d10.804222158681506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275b3cefabcb%3A0xf3335eb4224ca86e!2sChung%20c%C6%B0%20Sky%209!5e0!3m2!1svi!2s!4v1728285693012!5m2!1svi!2s"
                width="0"
                height="0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full max-h-full"
              ></iframe>
            </div>
          </div>

          <div className="col-span-1 h-full">
            <div className=" rounded-[20px] h-full p-4">
              <div className="bg-orange-500 rounded-[15px] px-5 py-10 h-full">
                <div className="text-4xl text-center text-white font-bold mb-5">
                  Liên hệ
                </div>
                <input
                  className="w-full outline-none bg-white rounded-full px-7 py-5 placeholder:text-gray-600 "
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mt-3"></div>
                <input
                  className="w-full outline-none bg-white rounded-full px-7 py-5 placeholder:text-gray-600 "
                  placeholder="Số điện thoại"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="mt-3"></div>
                <textarea
                  id="message"
                  rows="4"
                  className="block px-7 h-40 py-2.5 w-full text-gray-900 bg-white rounded-[20px] border outline-none border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lời nhắn..."
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>

                <p className="mt-5 duration-200 hover:bg-pink-500 cursor-pointer bg-pink-600 text-white text-lg flex items-center rounded-full font-semibold mx-auto w-fit px-7 py-2">
                  <span onClick={() => call_save_lienhe()}>Liên hệ ngay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertErr open={open} setOpen={setOpen} err={err} />
    </div>
  );
};

export default Contact;
