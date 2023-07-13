import TimePicker from "react-time-picker";
import { ErrorMessage, useField, useFormikContext } from "formik";
import ErrorText from "./ErrorText";

function Timepicker({ name, label, ...rest }) {
  const { errors, setFieldValue } = useFormikContext();
  const [field] = useField(name);


  return (
    <div className="inputGroup timepicker">
      {label && (
        <div className="label">
          <label htmlFor={name}> {label}</label>
        </div>
      )}
      <div className="field">
        <TimePicker
          value={field.value}
          onChange={(val) => setFieldValue(name, val)}
          error={errors[name]}
          {...rest}
          {...field}
        />
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </div>
  );
}

export default Timepicker;
