import { Checkbox, Space } from "antd";

const CheckBoxItem = (props) => {
  return (
    <>
      <Checkbox.Group name={props.fieldName}>
        <Space direction={props.direction}>
          {props.options &&
            props.options.map((option, index) => {
              return (
                <Checkbox value={option.Value} key={index}>
                  {option.Key}
                </Checkbox>
              );
            })}
        </Space>
      </Checkbox.Group>
    </>
  );
};

export default CheckBoxItem;
