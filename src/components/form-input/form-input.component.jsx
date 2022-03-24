import "./form-input.styles.scss";

export const FormInput = ({ label, inputName, ...inputProps }) => {
  return (
    <div className="group">
      <input name={inputName} {...inputProps} className="form-input" />
      <label
        htmlFor={inputName}
        className={`${
          inputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
