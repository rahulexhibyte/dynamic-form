import { Form, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputItem from "../formItems/inputItem";
import TextAreaItem from "../formItems/textAreaItem";
import DropDownItem from "../formItems/dropdownItem";

import SpecificationModal from "../SpecificationModal";
import { AiOutlineDelete } from "react-icons/ai";
import { addFormItem, removeFormItem } from "../../redux/actions/formItem";
import { closeModal, openModal } from "../../redux/actions/modal";
import InputSpecificationModal from "../itemSpeciModal/inputModal";
import TextAreaSpecificationModal from "../itemSpeciModal/textAreaModal";
import DropDownSpecificationModal from "../itemSpeciModal/dropdownModal";
import RadioGropSpecificationModal from "../itemSpeciModal/radiogroupModal";
import RadioGroupItem from "../formItems/radiogroupItem";

const { Option } = Select;
const FormListItem = ({ remove, fields }) => {
  const dispatch = useDispatch();
  const { name, ...restFields } = fields;
  const [form] = Form.useForm();

  const [selectedItem, setselectedItem] = useState(null);
  const [itemSpecification, setItemSpecification] = useState({});

  const [itemTag, setItemTag] = useState(null);
  const [isRequired, setisRequired] = useState(false);

  const onselectedItemHandler = (attr) => {
    let formItem = {};
    switch (attr.value) {
      case "input":
        formItem = {
          field_label: attr.label,
          field_id: name,
          field_type: attr.value,
          field_name: name,
          field_required: attr.isRequired,
          field_placeHolder: attr.placeholder,
        };
        setselectedItem(
          <InputItem
            fieldRequired={attr.isRequired}
            fieldName={name}
            fieldPlaceHolder={attr.placeholder}
          />
        );
        dispatch(addFormItem(formItem));
        break;
      case "text-area":
        formItem = {
          field_label: attr.label,
          field_id: name,
          field_type: attr.value,
          field_name: name,
          field_required: attr.isRequired,
          field_placeHolder: attr.placeholder,
        };
        setselectedItem(
          <TextAreaItem
            fieldRequired={attr.isRequired}
            fieldName={name}
            fieldPlaceHolder={attr.placeholder}
          />
        );
        dispatch(addFormItem(formItem));
        break;
      case "dropdown":
        formItem = {
          field_label: attr.label,
          field_id: name,
          field_type: attr.value,
          field_name: name,
          field_required: attr.isRequired,
          field_placeHolder: attr.placeholder,
          field_options: attr.options,
        };
        setselectedItem(
          <DropDownItem
            fieldRequired={attr.isRequired}
            fieldName={name}
            fieldPlaceHolder={attr.placeholder}
            options={attr.options}
          />
        );
        dispatch(addFormItem(formItem));
        break;
      case "radiogroup":
        formItem = {
          field_label: attr.label,
          field_id: name,
          field_type: attr.value,
          field_name: name,
          field_required: attr.isRequired,
          field_placeHolder: attr.placeholder,
          field_options: attr.options,
          field_direction: attr.direction,
        };
        setselectedItem(
          <RadioGroupItem
            direction={attr.direction}
            fieldName={name}
            options={attr.options}
          />
        );
        dispatch(addFormItem(formItem));
        break;
      default:
        setselectedItem(null);
        break;
    }
  };

  useEffect(() => {
    onselectedItemHandler({
      label: itemSpecification.label,
      value: itemTag,
      isRequired,
      placeholder: itemSpecification.placeHolder || "",
      options: itemSpecification.options || [],
      direction: itemTag === "radiogroup" ? itemSpecification.direction : "",
    });
  }, [itemTag, isRequired, itemSpecification]);

  const onItemHandler = (value) => {
    setItemTag(value);
    dispatch(openModal());
  };

  const onRequiredHandler = (value) => {
    setisRequired(value);
  };

  return (
    <div className="w-full p-1">
      <Form.Item name={[name, "first"]} {...restFields}>
        <div className="p-5 bg-gray-400 bg-opacity-50 rounded-lg border-dashed border-2 border-gray-600">
          <Select className="w-full" onChange={onItemHandler} autoFocus>
            <Option key="input">Text Input</Option>
            <Option key="text-area">Text Area</Option>
            <Option key="dropdown">Dropdown</Option>
            <Option key="radiogroup">Radio Group</Option>
            <Option key="checkboxes">Checkboxes</Option>
            <Option key="date">Date</Option>
            <Option key="time">Time</Option>
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
      <SpecificationModal
        onSubmit={() => {
          form
            .validateFields()
            .then((values) => {
              console.log(values);
              setItemSpecification(values);
              dispatch(closeModal());
              form.resetFields();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {itemTag === "input" && <InputSpecificationModal form={form} />}
        {itemTag === "text-area" && <TextAreaSpecificationModal form={form} />}
        {itemTag === "dropdown" && <DropDownSpecificationModal form={form} />}
        {itemTag === "radiogroup" && (
          <RadioGropSpecificationModal form={form} />
        )}
      </SpecificationModal>
    </div>
  );
};
export default FormListItem;
