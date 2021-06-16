import { Form, PageHeader, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import FormListItem from "../../components/FormListItem";
const MainScreen = (props) => {
  const [form] = Form.useForm();
  const formItem = useSelector((state) => state.formItem);
  const saveFormHandler = () => {
    console.log(formItem);
  };
  return (
    <>
      <PageHeader
        title="Dynamic Form"
        extra={[
          <Button type="primary" onClick={saveFormHandler}>
            Save Form
          </Button>,
        ]}
      />
      <div className="w-1/3 mx-auto">
        <Form className="w-full form" form={form} name="fields-form">
          <Form.List name="input-items">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field) => (
                    <React.Fragment key={field.key}>
                      <FormListItem remove={remove} fields={field} />
                    </React.Fragment>
                  ))}
                  <Button
                    className="w-full text-center"
                    onClick={add}
                    type="dashed"
                  >
                    Add Fields
                  </Button>
                </>
              );
            }}
          </Form.List>
        </Form>
      </div>
    </>
  );
};

export default MainScreen;
