import React from "react";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

function Checkbox({ name, label, options, ...rest }) {
  const [field] = useField(name);

  return (
    <div className="inputGroup radio">
      {label && (
        <div className="label">
          <label htmlFor={name}> {label}</label>
        </div>
      )}
      <div className="field">
        {options.map((option) => {
          return (
            <React.Fragment key={option.key}>
              <input
                {...field}
                {...rest}
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          );
        })}

        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default Checkbox;
