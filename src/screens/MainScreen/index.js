import { Form, PageHeader, Button } from "antd";
import FormListItem from "../../components/FormListItem";
const MainScreen = (props) => {
  return (
    <>
      <PageHeader
        title="Dynamic Form"
        extra={[<Button type="primary">Save Form</Button>]}
      />
      <div className="w-1/3 mx-auto">
        <Form className="w-full form">
          <Form.List name="input-items">
            {(fields, { add, remove }) => (
              <>
                {fields.map((fields) => (
                  <FormListItem remove={remove} fields={fields} />
                ))}
                <Button
                  className="w-full text-center"
                  onClick={add}
                  type="dashed"
                >
                  Add Fields
                </Button>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </>
  );
};

export default MainScreen;
