"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import { convertSlug } from "@/util/convertSlug";

const UpdateBanner = (props) => {
  const {
    isModalUpdateBanner,
    setIsModalUpdateBanner,
    dataUpdate,
    fetchAllBanner,
  } = props;

  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    form.resetFields();
    setFileName(dataUpdate?.thumbnail);
    setFileList([
      {
        uid: "-1",
        name: "ảnh",
        status: "done",
        url: `${process.env.URL_BACKEND}/images/${dataUpdate?.thumbnail}`,
      },
    ]);
  }, [dataUpdate]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const handleUploadFile_thumbnail = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("fileImg", file);
    const data = await fetch(`${process.env.URL_BACKEND}/api/v1/uploadImg`, {
      method: "POST",
      body: formData,
    });
    const res = await data.json();
    if (res && res.EC === 1) {
      setFileName(res.data.fileUploaded);
      onSuccess("ok");
    } else {
      onError("Đã có lỗi khi upload");
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalUpdateBanner(false);
   
  };

  const onFinish = (values) => {
    CallUpdateBanner(fileName);

    form.resetFields();
    setIsModalUpdateBanner(false);
    setFileList([]);
  };

  const CallUpdateBanner = async (thumbnail) => {
    const res = await fetch(
      `${process.env.URL_BACKEND}/api/v1/banner/${dataUpdate?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ thumbnail }),
      }
    );

    const result = await res.json();
    if (result && result.EC === 1) {
      message.success("Update thành công");
      fetchAllBanner();
    } else {
      message.error("Có lỗi !");
    }
  };

  return (
    <>
      <Modal
        title="Update banner"
        open={isModalUpdateBanner}
        onOk={() => {
          form.submit();
        }}
        okText="Sửa"
        onCancel={handleCancel}
        maskClosable={false}
        width={1000}
        
      >
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
          <Row>
            <Col span={24}>
              <Card title="Ảnh " bordered={true}>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  customRequest={handleUploadFile_thumbnail}
                  onChange={onChange}
                  onPreview={onPreview}
                  maxCount={1}
                  multiple={false}
                  accept="image/*"
                >
                  Tải lên
                </Upload>
              </Card>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateBanner;
