import React from "react";
import styled from "styled-components";
import ErrorText from "./ErrorText";
import { ErrorMessage, useField, useFormikContext } from "formik";

const SelectCustom = styled.select`
  border-color: ${(props) => props.error && "#d91111"}!important;
  border-radius: 1rem !important;
`;

function Select({ name, label, options, ...rest }) {
  const { errors } = useFormikContext();
  const [field] = useField(name);
  return (
    <div className="inputGroup">
      {label && (
        <div className="label">
          <label htmlFor={name}> {label}</label>
        </div>
      )}
      <div className="field">
        <SelectCustom
          id={name}
          error={errors[name]}
          type="text"
          {...field}
          {...rest}
        >
          {options.map((option, index) => {
            return (
              <option value={option.value} key={index}>
                {option.key}
              </option>
            );
          })}
        </SelectCustom>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default Select;
