"use client";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import PreviewCart from "@/components/cart/PreviewCart";
import { Badge, Button, Input, Space } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar1 = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = () => {
    console.log("vvvvv", searchValue);
    router.push(`/tim-kiem?text=${searchValue}`);
    
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const updateCountFromStorage = () => {
    let storedCart = JSON.parse(localStorage.getItem("arr_cart"));
    if (storedCart && storedCart.length > 0) {
      setCount(storedCart.length);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    // Initial load: get cart count from local storage
    updateCountFromStorage();

    // Custom event to listen for local storage changes
    const handleStorageChange = () => {
      updateCountFromStorage();
    };

    // Listen for the manual "cartUpdated" event (for same-tab updates)
    window.addEventListener("cartUpdated", handleStorageChange);

    // Optionally, also listen for 'storage' events across different tabs
    window.addEventListener("storage", handleStorageChange);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("cartUpdated", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex px-2 py-2 xl:px-0 justify-between text-xs sm:text-sm">
      <div className="hidden lg:flex pb-2 items-center gap-5">
        <div className="flex items-center gap-2 ">
          <MdCall />
          0987654321
        </div>

        <div className="flex items-center gap-2">
          <IoMdMail />
          book@gmail.com
        </div>
      </div>

      <div className="lg:hidden">
        <Space
          direction="vertical"
          className=" w-[250px] sm:w-[300px] md:w-[400px] max-w-full"
        >
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm kiếm "
              onKeyDown={handleKeyPress}
              className="!outline-none !border-none !shadow-none"
            />
            <Button
              onClick={() => handleSearch()}
              className="!bg-orange-500 !outline-none !hover:border-none !border-none !hover:outline-none !hover:bg-orange-100 !hover:text-white "
            >
              <FaSearch className="text-white" />
            </Button>
          </Space.Compact>
        </Space>
      </div>
      <div className="flex justify-end py-2 pr-2 items-center gap-10 w-full">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            router.push("/gio-hang");
          }}
        >
          <PreviewCart />

          <Badge
            count={count}
            showZero
            size="small"
            className="absolute -top-2 -right-3"
          ></Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
