import { Form, Input, Space, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

const { Option } = Select;
const RadioGroupSpecificationModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input placeholder="Enter PlaceHolder" />
        </Form.Item>
        <Form.Item label="Direction" name="direction">
          <Select>
            <Option value="vertical">Vertical</Option>
            <Option value="horizontal">Horizontal</Option>
          </Select>
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
                      <Input
                        placeholder="Enter Value"
                        className="lowercase"
                        autoCapitalize="none"
                      />
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

export default RadioGroupSpecificationModal;
