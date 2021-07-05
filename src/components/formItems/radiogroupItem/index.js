import { Radio, Space } from "antd";

const RadioGroupItem = (props) => {
  return (
    <>
      <Radio.Group name={props.fieldName}>
        <Space direction={props.direction}>
          {props.options &&
            props.options.map((option, index) => {
              return (
                <Radio value={option.Value} key={index}>
                  {option.Key}
                </Radio>
              );
            })}
        </Space>
      </Radio.Group>
    </>
  );
};

export default RadioGroupItem;
