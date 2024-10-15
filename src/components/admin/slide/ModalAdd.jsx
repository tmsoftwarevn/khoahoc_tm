"use client"
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

const AddBanner = (props) => {
  const {
    isModalAddBanner,
    setIsModalAddBanner,
    fetchAllBanner,
    
  } = props;

  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");

  const [fileList, setFileList] = useState([]);

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
    setIsModalAddBanner(false);
  };

  const onFinish = (values) => {
    CallAddBanner(fileName);

    form.resetFields();
    setIsModalAddBanner(false);
    setFileList([]);
  };

  const CallAddBanner = async (thumbnail) => {
    let id_select = 0;
    const res = await fetch(`${process.env.URL_BACKEND}/api/v1/banner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ thumbnail }),
    });

    const result = await res.json();
    if (result && result.EC == 1) {
      message.success("Thêm thành công");
      fetchAllBanner();
    } else {
      message.error("Có lỗi !");
    }
    
  };

  return (
    <>
      <Modal
        title="Thêm banner"
        open={isModalAddBanner}
        onOk={() => {
          form.submit();
        }}
        okText="Thêm mới"
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

export default AddBanner;
