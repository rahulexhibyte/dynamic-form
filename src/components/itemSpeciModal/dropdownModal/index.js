import { Form, Input, Space, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
const DropDownSpecificationModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input placeholder="Enter PlaceHolder" />
        </Form.Item>
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => {
                return (
                  <Space key={key} style={{ display: "flex" }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, "Key"]}
                      fieldKey={[key, "Key"]}
                      rules={[{ required: true, message: "Please Input key" }]}
                    >
                      <Input placeholder="Enter Key name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "Value"]}
                      fieldKey={[key, "Value"]}
                      rules={[
                        { required: true, message: "Please Input Value" },
                      ]}
                    >
                      <Input placeholder="Enter Value" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Options
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default DropDownSpecificationModal;
