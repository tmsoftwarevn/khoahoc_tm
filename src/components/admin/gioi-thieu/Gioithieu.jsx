"use client";
import { Button, Card, Col, Flex, Input, Row, message } from "antd";
import { useEffect, useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";

const Gioithieu = () => {

  let [description, setDescription] = useState("");
  const refEditor = useRef(null);

  const fetch_Gioithieu = async () => {
    const res = await fetch(`${process.env.URL_BACKEND}/api/v1/about`);
    const result = await res.json();

    if (result && result.data) setDescription(result.data[0]?.description);
  };

  useEffect(() => {
    fetch_Gioithieu();
  }, []);

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

  const update_gioithieu = async () => {
    description = refEditor?.current?.getContent();

    const data = await fetch(`${process.env.URL_BACKEND}/api/v1/about/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    });

    const res = await data.json();

    if (res && res.EC === 1) {
      message.success("Cập nhật thành công");
      fetch_Gioithieu();
    } else {
      message.error("Cập nhật thất bại");
    }
  };

  return (
    <div>
      <Flex justify="center">
        <Button
          type="primary"
          className="mb-3"
          onClick={() => update_gioithieu()}
        >
          Cập nhật
        </Button>
      </Flex>
      <Editor
        apiKey={process.env.API_KEY_EDITOR}
        onChange={(evt, editor) => (refEditor.current = editor)}
        initialValue={description}
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
          fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
          file_picker_types: "image",
          file_picker_callback: filePickerCallback,
        }}
      />
    </div>
  );
};
export default Gioithieu;
