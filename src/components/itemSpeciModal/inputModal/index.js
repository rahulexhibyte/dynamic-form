import { Form, Input } from "antd";
import React from "react";
const InputSpecificationModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default InputSpecificationModal;
