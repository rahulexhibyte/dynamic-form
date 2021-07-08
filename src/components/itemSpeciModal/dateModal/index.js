import { DatePicker, Form, Input, Radio, Space } from "antd";

const DatePickerSpecificationModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input placeholder="Enter Title" />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input placeholder="Enter PlaceHolder" />
        </Form.Item>
        <Form.Item label="Default Selected Date" name="defaultValue">
          <DatePicker
            placeholder="Select Default Date"
            className="w-full"
          ></DatePicker>
        </Form.Item>
        <div className="flex">
          <Space size="middle">
            <Form.Item label="Disabled Date" name="disabledDate">
              <DatePicker placeholder="Select Disabled Date"></DatePicker>
            </Form.Item>
            <Form.Item name="disabledDateNav">
              <Radio.Group>
                <Radio value="before">Before</Radio>
                <Radio value="after">After</Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
        </div>
      </Form>
    </>
  );
};

export default DatePickerSpecificationModal;
