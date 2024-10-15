"use client";
import {
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  message,
} from "antd";
import { useEffect, useRef, useState } from "react";

import { Upload } from "antd";

import { Editor } from "@tinymce/tinymce-react";
import TextArea from "antd/es/input/TextArea";

import { convertSlug } from "../../../util/convertSlug";

const UpdateBaiviet = (props) => {
  const refEditor = useRef(null);

  const {
    isModalUpdateBaiviet,
    setIsModalUpdateBaiviet,
    fetchBaiviet_All,
    dataUpdate,
  } = props;
  //////////////////

  const filePickerCallback = function (cb, value, meta) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = async function () {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("fileImg", file);
      const data = await fetch(`${process.env.URL_BACKEND}/api/v1/uploadImg`, {
        method: "POST",
        body: formData,
      });
      const res = await data.json();
      if (res && res.EC === 1) {
        cb(`${process.env.URL_BACKEND}/images/${res.data.fileUploaded}`, {
          alt: file.name,
        });
      }
    };

    input.click();
  };
  ////////////////////
  const [form] = Form.useForm();

  const [thumbnail, setFileName] = useState("");

  let [noidung, setNoidung] = useState("");

  // console.log('ddd', dataUpdate)
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "ảnh",
      status: "done",
      url: `${process.env.URL_BACKEND}/images/${dataUpdate?.thumbnail}`,
    },
  ]);

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

  useEffect(() => {
    form.setFieldsValue({
      tieude: dataUpdate.tieude,
      key_word: dataUpdate.key_word,
      meta_des: dataUpdate.meta_des,
      mota_ngan: dataUpdate.mota_ngan,
    });

    setFileName(dataUpdate?.thumbnail);
    setNoidung(dataUpdate.noidung);
    setFileList([
      {
        uid: "-1",
        name: "ảnh",
        status: "done",
        url: `${process.env.URL_BACKEND}/images/${dataUpdate?.thumbnail}`,
      },
    ]);
  }, [dataUpdate]);

  const onFinish = async (values) => {
    const { tieude, key_word, meta_des, mota_ngan } = values;
    const slug = convertSlug(tieude);
    noidung = refEditor?.current?.getContent();

    const data = await fetch(
      `${process.env.URL_BACKEND}/api/v1/baiviet/${dataUpdate?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tieude,
          thumbnail,
          key_word,
          meta_des,
          mota_ngan,
          noidung,
          slug,
        }),
      }
    );

    const res = await data.json();

    if (res && res.EC === 1) {
      message.success("Cập nhật thành công");
      handleCancel();
      fetchBaiviet_All();
    } else {
      message.error("Cập nhật thất bại");
      handleCancel();
    }
  };

  const handleCancel = () => {
    
    setIsModalUpdateBaiviet(false);
   
    setNoidung("");
  };

  return (
    <>
      <Modal
        title="Cập nhật bài viết"
        open={isModalUpdateBaiviet}
        onOk={() => {
          form.submit();
        }}
        okText="Cập nhật"
        onCancel={handleCancel}
        maskClosable={false}
        width={1200}
      >
        <div>
          <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Tiêu đề"
                  name="tieude"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  //initialValue={dataUpdate?.tieude}
                >
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
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
              </Col>

              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="keyword (SEO)"
                  name="key_word"
                  rules={[
                    {
                      required: true,
                      message: "Nhập đầy đủ !",
                    },
                  ]}
                  //initialValue={dataUpdate?.key_word}
                >
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Description (SEO)"
                  name="meta_des"
                  rules={[
                    {
                      required: true,
                      message: "Nhập đầy đủ !",
                    },
                  ]}
                  //initialValue={dataUpdate?.meta_des}
                >
                  <TextArea rows={3} maxLength={1000} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Mô tả ngắn"
                  name="mota_ngan"
                  rules={[
                    {
                      required: true,
                      message: "Nhập đầy đủ !",
                    },
                  ]}
                  //initialValue={dataUpdate?.mota_ngan}
                >
                  <TextArea rows={3} maxLength={1000} />
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <h4 className="mb-4">Nội dung:</h4>
          <Editor
            onChange={(evt, editor) => (refEditor.current = editor)}
            apiKey={`${process.env.API_KEY_EDITOR}`}
            //onChange={(evt, editor) => setNoidung(editor.getContent())}
            initialValue={noidung}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic fontsize forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help | image media",

              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              fontsize_formats: "8px 10px 12px 14px 18px 24px 28px 36px",
              file_picker_types: "image",
              file_picker_callback: filePickerCallback,
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default UpdateBaiviet;
