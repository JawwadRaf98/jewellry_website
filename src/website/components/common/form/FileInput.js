import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import styled from "styled-components";
import ErrorText from "./ErrorText";

const InputCustom = styled.input`
  border-color: ${(props) => props.error && "#d91111"}!important;
`;

function FileInput({ name, label, ...rest }) {
  const { errors } = useFormikContext();
  const [field, setFieldValue] = useField(name);
  return (
    <div className="inputGroup">
      {label && (
        <div className="label">
          <label htmlFor={name}> {label}</label>
        </div>
      )}
      <div className="field">
        <InputCustom
          id={name}
          type="file"
          error={errors[name]}
          type="text"
          {...rest}
        />
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default FileInput;
