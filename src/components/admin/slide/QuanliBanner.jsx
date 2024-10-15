"use client";
import React, { useEffect, useRef, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Popconfirm,
  Space,
  Table,
  message,
  notification,
} from "antd";

import UpdateBanner from "./ModalUpdate";
import AddBanner from "./ModalAdd";
import Image from "next/image";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const title = "Xác nhận xóa ?";
const QuanliBanner = () => {
  /// search
  const [listBanner, setListBanner] = useState([]);

  const [isModalAddBanner, setIsModalAddBanner] = useState(false);
  const [dataUpdate, setDataUpdate] = useState("");
  const [isModalUpdateBanner, setIsModalUpdateBanner] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllBanner();
  }, []);

  //0: slide   
  const fetchAllBanner = async () => {
    const res = await fetch(`${process.env.URL_BACKEND}/api/v1/banner`);
    const result = await res.json();
    if (result && result.data) customBanner(result.data);
  };

  const confirm = async (id) => {
    const data = await fetch(`${process.env.URL_BACKEND}/api/v1/banner/${id}`, {
      method: "DELETE",
    });
    const res = await data.json();
    if (res && res.EC === 1) {
      message.success("Xóa thành công ");
      fetchAllBanner();
    } else {
      message.error("Có lỗi !");
    }
  };

  const customBanner = (list) => {
    let arr = [];
    list.map((item, index) => {
      arr.push({
        key: index + 1,
        STT: index + 1,
        id: item.id,
        thumbnail: item.thumbnail,

        action: index,
      });
    });

    setListBanner(arr);
  };
  const handleUpdateBanner = (record) => {
    setIsModalUpdateBanner(true);
    setDataUpdate(record);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },

    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text, record, index) => {
        return (
          <div>
            <Image
              alt="dsf"
              src={`${process.env.URL_BACKEND}/images/${record?.thumbnail}`}
              width={100}
              height={100}
            />
          </div>
        );
      },
    },

    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              gap: 20,
            }}
          >
            <div
              style={{
                whiteSpace: "nowrap",
              }}
            >
              <Popconfirm
                placement="left"
                title={title}
                onConfirm={() => {
                  confirm(record?.id);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  size="small"
                  type="primary"
                  danger
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <MdDelete />
                </Button>
              </Popconfirm>
            </div>

            <div>
              <Button
                size="small"
                type="primary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <CiEdit
                  style={{ fontSize: "15px" }}
                  onClick={() => {
                    handleUpdateBanner(record);
                  }}
                />
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Flex justify="flex-end">
        <Button
          type="primary"
          className="mb-3"
          onClick={() => setIsModalAddBanner(true)}
        >
          Thêm mới
        </Button>
      </Flex>

      <Table
        columns={columns}
        dataSource={listBanner}
        pagination={{
          showSizeChanger: true,
          position: ["bottomCenter"],
          pageSizeOptions: [2, 10, 50, 100],
        }}
      />

      <UpdateBanner
        isModalUpdateBanner={isModalUpdateBanner}
        setIsModalUpdateBanner={setIsModalUpdateBanner}
        dataUpdate={dataUpdate}
        fetchAllBanner={fetchAllBanner}
      />
      <AddBanner
        isModalAddBanner={isModalAddBanner}
        setIsModalAddBanner={setIsModalAddBanner}
        fetchAllBanner={fetchAllBanner}
      />
    </>
  );
};

export default QuanliBanner;
