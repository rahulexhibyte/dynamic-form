import { Form, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SpecificationModal from "../specificationModal/";
import { AiOutlineDelete } from "react-icons/ai";
import InputItem from "../InputItem";
import { modalShow } from "../../actions";

const { Option } = Select;
const FormListItem = ({ remove, fields }) => {
  const dispatch = useDispatch();
  const { name, ...restFields } = fields;
  const [form] = Form.useForm();

  const [selectedItem, setselectedItem] = useState(null);

  const [itemTag, setItemTag] = useState(null);
  const [isRequired, setisRequired] = useState(false);
  const [placeHolder, setplaceHolder] = useState("");

  const onselectedItemHandler = ({ value, isRequired, placeholder }) => {
    switch (value) {
      case "input":
        setselectedItem(
          <InputItem
            fieldRequired={isRequired}
            fieldName={name}
            fieldPlaceHolder={placeholder}
          />
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    onselectedItemHandler({
      value: itemTag,
      isRequired,
      placeholder: placeHolder,
    });
  }, [itemTag, isRequired, placeHolder]);

  const onItemHandler = (value) => {
    dispatch(modalShow());
    setItemTag(value);
  };

  const onRequiredHandler = (value) => {
    setisRequired(value);
  };

  return (
    <div className="w-full p-1">
      <Form.Item name={[name, "first"]} {...restFields}>
        <div className="p-5 bg-gray-400 bg-opacity-50 rounded-lg">
          <Select className="w-full" onChange={onItemHandler} autoFocus>
            <Option key="input">Text Input</Option>
          </Select>
          <div className="my-5">{selectedItem}</div>
          <div className="flex justify-between">
            <span className="font-bold">
              Required
              <span className="ml-3">
                <Switch onChange={onRequiredHandler} />
              </span>
            </span>
            <span
              className="text-2xl ml-3 cursor-pointer"
              onClick={() => remove(name)}
            >
              <AiOutlineDelete />
            </span>
          </div>
        </div>
      </Form.Item>
      <SpecificationModal form={form} setplaceHolder={setplaceHolder} />
      {/* <Modal
        visible={isModalVisible}
        centered
        okText="submit"
        closable={false}
        onCancel={() => {
          dispatch(constants.MODAL_CLOSE);
        }}
        title="Specification"
        onOk={() => {
          form
            .validateFields()
            .then((values) => setplaceHolder(values.placeHolder));
          dispatch(constants.MODAL_CLOSE);
        }}
      >
        <Form form={form}>
          <Form.Item label="PlaceHolder" name="placeHolder">
            <Input />
          </Form.Item>
        </Form>
      </Modal> */}
    </div>
  );
};
export default FormListItem;
