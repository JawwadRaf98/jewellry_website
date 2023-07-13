import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import styled from "styled-components";
import DateView from "react-datepicker";
import ErrorText from "./ErrorText";
import "react-datepicker/dist/react-datepicker.css";

const DateViewCustom = styled(DateView)`
  border-color: ${(props) => props.error && "#d91111"}!important;
`;

function DatePicker({ name, label, ...rest }) {
  const { errors, setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <div className="inputGroup datepicker">
      {label && (
        <div className="label">
          <label htmlFor={name}> {label}</label>
        </div>
      )}
      <div className="field">
        <DateViewCustom
          id={name}
          {...field}
          {...rest}
          selected={field.value}
          error={errors[name]}
          onChange={(val) => setFieldValue(name, val)}
          autoComplete="off"
        />
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default DatePicker;
