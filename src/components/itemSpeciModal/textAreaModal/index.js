import { Form, Input } from "antd";
import React from "react";
const TextAreaSpecificationModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input placeholder="Enter PlaceHolder" />
        </Form.Item>
      </Form>
    </>
  );
};

export default TextAreaSpecificationModal;
