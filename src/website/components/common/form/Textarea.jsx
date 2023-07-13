import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import styled from "styled-components";
import ErrorText from "./ErrorText";

const TextareaCustom = styled.textarea`
  border-color: ${(props) => props.error && "#d91111"}!important;
  border-radius: 1rem !important;
`;

function Textarea({ name, label, ...rest }) {
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
        <TextareaCustom
          id={name}
          error={errors[name]}
          type="text"
          {...field}
          {...rest}
        />
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default Textarea;
