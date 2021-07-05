import { Select } from "antd";
const { Option } = Select;

const DropDownItem = (props) => {
  return (
    <>
      <Select placeholder={props.fieldPlaceHolder} name={props.fieldName}>
        {props.options &&
          props.options.map((option, index) => {
            return (
              <Option value={option.Value} key={index}>
                {option.Key}
              </Option>
            );
          })}
      </Select>
    </>
  );
};

export default DropDownItem;
