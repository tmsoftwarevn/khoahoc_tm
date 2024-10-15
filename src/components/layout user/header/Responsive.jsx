import React, { useEffect, useState } from "react";
import { Button, Drawer, Input, Space } from "antd";
import { Menu } from "antd";
import "./res.scss";
import { FaSearch } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const ResponsiveHeader = (props) => {
  const { dropdown } = props;
  const { open, setOpen } = props;
  const router = useRouter();

  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState(pathname); // Set initial state to current path

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  const onClose = () => {
    setOpen(false);
  };

  const renderItems = (list) => {
    let arr = [];

    list.map((item, index) => {
      arr.push(
        getItem(
          <div
            onClick={() =>
              router.push(
                `/the-loai/${item.slug}`,

                onClose()
              )
            }
          >
            {item.category}
          </div>,

          item.id
        )
      );
    });

    return arr;
  };

  const render_sanpham = () => {
    let arr = [
      getItem(
        <div
          onClick={() =>
            router.push(
              `/combo-sach-qua-tang`,
              onClose()
            )
          }
        >
          Combo sách- quà tặng
        </div>,
        "4324"
      ),
      getItem(
        <div
          onClick={() =>
            router.push(
              `/qua-tang`,

              onClose()
            )
          }
        >
          Quà tặng
        </div>,
        "543"
      ),
    ];

    return arr;
  };
  const items = [
    getItem(
      <Link onClick={() => onClose()} href="/">
        Trang chủ
      </Link>,
      "/"
    ),
    getItem(
      <Link onClick={() => onClose()} href="/gioi-thieu">
        Giới thiệu
      </Link>,
      "/gioi-thieu"
    ),
    getItem("Tủ sách", "sub1", "", renderItems(dropdown)),
    getItem("Sản phẩm khác", "sub2", "", render_sanpham()),
    getItem(
      <Link onClick={() => onClose()} href="/tin-tuc">
        Tin tức
      </Link>,
      "/tin-tuc"
    ),
    getItem(
      <Link onClick={() => onClose()} href="/lien-he">
        Liên hệ
      </Link>,
      "/lien-he"
    ),
  ];

  return (
    <>
      {open ? (
        <Menu
          style={{
            width: "100%",
          }}
          selectedKeys={[selectedKey]}
          mode="inline"
          items={items}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ResponsiveHeader;
