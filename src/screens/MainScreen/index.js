import { Form, PageHeader, Button, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormListItem from "../../components/FormListItem";
import {
  setFormDesc,
  setFormId,
  setFormTitle,
} from "../../redux/actions/formItem";
const MainScreen = (props) => {
  const [form] = Form.useForm();
  const formItem = useSelector((state) => state.form.formItem);
  const dispatch = useDispatch();
  const history = useHistory();

  const generateUniqueID = (length) => {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };
  const uniqueKey = generateUniqueID(25);

  useEffect(() => {
    console.log(uniqueKey);
    dispatch(setFormId(uniqueKey));
  }, [uniqueKey]);

  const saveFormHandler = () => {
    console.log(formItem);
  };
  const previewFormHandler = () => {
    history.push("/forms/" + uniqueKey);
  };

  const changeFormTitleHandler = (event) => {
    dispatch(setFormTitle(event.target.value));
  };
  const changeFormDescHandler = (event) => {
    dispatch(setFormDesc(event.target.value));
  };
  return (
    <>
      <PageHeader
        title="Dynamic Form"
        extra={[
          <Button type="primary" onClick={previewFormHandler}>
            Preview Form
          </Button>,
          <Button type="primary" onClick={saveFormHandler}>
            Save Form
          </Button>,
        ]}
      />
      <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-2/3 mx-auto pb-5">
        <div className="mb-5">
          <Input
            placeholder="Enter Form Title"
            bordered={false}
            onChange={changeFormTitleHandler}
          />
          <Input.TextArea
            autoSize
            bordered={false}
            placeholder="Enter Description"
            className="resize-none"
            onChange={changeFormDescHandler}
          />
        </div>
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
