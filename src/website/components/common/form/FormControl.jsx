import React from "react";

import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Select from "./Select";
import DatePicker from "./DatePicker";
import Timepicker from "./TimePicker";
import FileInput from "./FileInput";

function FormControl(props) {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "select":
      return <Select {...props} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "datePicker":
      return <DatePicker {...props} />;
    case "timePicker":
      return <Timepicker {...props} />;
    case "radio":
      return <RadioButton {...props} />;
    case "file":
      return <FileInput {...props} />;
    default:
      return null;
  }
}

export default FormControl;
