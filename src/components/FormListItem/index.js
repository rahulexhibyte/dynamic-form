import { Form, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputItem from "../InputItem";
import SpecificationModal from "../SpecificationModal";
import { AiOutlineDelete } from "react-icons/ai";
import { modalShow, addFormItem, removeFormItem } from "../../actions";

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
        dispatch(
          addFormItem({
            field_id: name,
            field_type: value,
            field_name: name,
            field_required: isRequired,
            field_placeHolder: placeHolder,
          })
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
          <div className="my-5 form-item">{selectedItem}</div>
          <div className="flex justify-between">
            <span className="font-bold">
              Required
              <span className="ml-3">
                <Switch onChange={onRequiredHandler} />
              </span>
            </span>
            <span
              className="text-2xl ml-3 cursor-pointer"
              onClick={() => {
                dispatch(removeFormItem(name));
                remove(name);
              }}
            >
              <AiOutlineDelete />
            </span>
          </div>
        </div>
      </Form.Item>
      <SpecificationModal form={form} setplaceHolder={setplaceHolder} />
    </div>
  );
};
export default FormListItem;
