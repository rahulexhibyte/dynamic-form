import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageHeader, Form, Button } from "antd";
import TextAreaItem from "../../components/formItems/textAreaItem";
import InputItem from "../../components/formItems/inputItem";
import DropDownItem from "../../components/formItems/dropdownItem";
import RadioGroupItem from "../../components/formItems/radiogroupItem";
import Title from "antd/lib/typography/Title";

const PreviewForm = (props) => {
  const { formid } = useParams();
  const formDetails = useSelector((state) => state.form.formItem);
  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);
  console.log(Object.values(formDetails[`${formid}`]));

  const getformItem = (formItem) => {
    switch (formItem.field_type) {
      case "text-area":
        return (
          <Form.Item
            name={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
            label={formItem.field_label}
          >
            <TextAreaItem
              fieldRequired={formItem.field_required}
              fieldName={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
              fieldPlaceHolder={formItem.field_placeHolder}
            ></TextAreaItem>
          </Form.Item>
        );
      case "input":
        return (
          <Form.Item
            name={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
            label={formItem.field_label}
          >
            <InputItem
              fieldRequired={formItem.field_required}
              fieldName={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
              fieldPlaceHolder={formItem.field_placeHolder}
            ></InputItem>
          </Form.Item>
        );
      case "dropdown":
        return (
          <Form.Item
            name={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
            label={formItem.field_label}
          >
            <DropDownItem
              fieldRequired={formItem.field_required}
              fieldName={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
              fieldPlaceHolder={formItem.field_placeHolder}
              options={formItem.field_options}
            ></DropDownItem>
          </Form.Item>
        );
      case "radiogroup":
        return (
          <Form.Item
            name={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
            label={formItem.field_label}
          >
            <RadioGroupItem
              direction={formItem.field_direction}
              fieldName={formItem.field_label.replace(/\s+/g, "").toLowerCase()}
              options={formItem.field_options}
            />
          </Form.Item>
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
        <Title level={5}>{formDetails[`${formid}`]["desc"]}</Title>
        <Form layout="vertical" onFinish={onFInishHandler}>
          {Object.values(formDetails[`${formid}`]["formItem"]) &&
            Object.values(formDetails[`${formid}`]["formItem"]).map(
              (formItem, index) => {
                return getformItem(formItem);
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
