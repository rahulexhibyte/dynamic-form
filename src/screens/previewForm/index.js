import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageHeader, Form, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { Input, Select, Radio, Space, Checkbox, DatePicker } from "antd";
import moment from "moment";

const { Option } = Select;

const PreviewForm = (props) => {
  const { formid } = useParams();
  const formDetails = useSelector((state) => state.form.formItem);
  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);
  console.log(Object.values(formDetails[`${formid}`]));

  const getformItem = (formItem) => {
    const name = formItem.field_label.replace(/\s+/g, "").toLowerCase();
    switch (formItem.field_type) {
      case "text-area":
        return (
          <Input.TextArea
            required={formItem.field_required}
            placeholder={formItem.field_placeHolder}
            name={name}
            className="resize-none"
          />
        );
      case "input":
        return <Input placeholder={formItem.field_placeHolder} name={name} />;
      case "dropdown":
        return (
          <Select placeholder={formItem.field_placeHolder} name={name}>
            {formItem.field_options &&
              formItem.field_options.map((option, index) => {
                return (
                  <Option value={option.Value} key={index}>
                    {option.Key}
                  </Option>
                );
              })}
          </Select>
        );
      case "radiogroup":
        return (
          <Radio.Group name={name}>
            <Space direction={formItem.field_direction}>
              {formItem.field_options &&
                formItem.field_options.map((option, index) => {
                  return (
                    <Radio value={option.Value} key={index}>
                      {option.Key}
                    </Radio>
                  );
                })}
            </Space>
          </Radio.Group>
        );
      case "checkboxes":
        return (
          <Checkbox.Group name={name}>
            <Space direction={formItem.field_direction}>
              {formItem.field_options &&
                formItem.field_options.map((option, index) => {
                  return (
                    <Checkbox value={option.Value} key={index}>
                      {option.Key}
                    </Checkbox>
                  );
                })}
            </Space>
          </Checkbox.Group>
        );
      case "date":
        const defaultDate = formItem.field_defaultDate.format("DD/MM/YYYY");
        return (
          <DatePicker
            defaultValue={moment(defaultDate, "DD/MM/YYYY")}
            placeholder={formItem.field_placeHolder}
            className="w-full"
            format="DD/MM/YYYY"
            disabledDate={(current) => {
              return formItem.field_disabledDateNav === "before"
                ? current && current < formItem.field_disabledDate.endOf("day")
                : current && current > formItem.field_disabledDate.endOf("day");
            }}
          ></DatePicker>
        );
      default:
        return <></>;
    }
  };

  const onFInishHandler = (values) => {
    console.log(values);
  };

  console.log(formDetails[`${formid}`]["title"]);

  return (
    <>
      <PageHeader title="Welcome to Forms Preview" />
      <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-2/3 mx-auto pb-5">
        <Title level={2}>{formDetails[`${formid}`]["title"]}</Title>
        <div className="p-5">
          <Text className="font-weight-normal text-left">
            {formDetails[`${formid}`]["desc"]}
          </Text>
        </div>
        <Form layout="vertical" onFinish={onFInishHandler}>
          {Object.values(formDetails[`${formid}`]["formItem"]) &&
            Object.values(formDetails[`${formid}`]["formItem"]).map(
              (formItem, index) => {
                return (
                  <Form.Item
                    name={formItem.field_label
                      .replace(/\s+/g, "")
                      .toLowerCase()}
                    label={formItem.field_label}
                    rules={[
                      formItem.field_required && {
                        required: true,
                        message: `Fill ${formItem.field_label} Carefully`,
                      },
                    ]}
                  >
                    {getformItem(formItem)}
                  </Form.Item>
                );
              }
            )}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default PreviewForm;
