import { Input } from "antd";

const InputItem = ({ fieldRequired, fieldName, fieldPlaceHolder }) => {
  return (
    <Input
      required={fieldRequired}
      placeholder={fieldPlaceHolder}
      name={fieldName}
    />
  );
};
export default InputItem;
