import React from "react";
import { ErrorMessage, useField } from "formik";
import ErrorText from "./ErrorText";

function RadioButton({ name, label, options,radiobtn, customno, ...rest }) {
  const [field] = useField(name);
  
  return (
    <div className="inputGroup radio">
      {label && (
        <div className="label">
          {/* <label htmlFor={name}> {label}</label> */}
        </div>
      )}
      <div className="field">
        {options.map((option) => {
          let checked = field.value === option.value
         
          return (
            <React.Fragment key={option.key}>
              <div className={radiobtn}>
              <input
                {...field}
                {...rest}
                type="radio"
                id={option.value}
                value={ (option.key == "No" && customno !== undefined)? customno : option.value}
                
                checked={checked}
              />
              <label htmlFor={option.value}>{option.key}</label>
              </div>
            </React.Fragment>
          );
        })}

        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default RadioButton;
