import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const DatePickerItem = (props) => {
  const [defaultDate, setDefaultDate] = useState(moment().format("DD/MM/YYYY"));

  useEffect(() => {
    setDefaultDate((props.defaultValue || moment()).format("DD/MM/YYYY"));
  }, [props.defaultValue]);

  return (
    <DatePicker
      defaultValue={moment(defaultDate, "DD/MM/YYYY")}
      placeholder={props.placeholder}
      className="w-full"
      format="DD/MM/YYYY"
      disabledDate={(current) => {
        return props.disabledDateNav === "before"
          ? current && current < props.disabledDate.endOf("day")
          : current && current > props.disabledDate.endOf("day");
      }}
    ></DatePicker>
  );
};

export default DatePickerItem;
