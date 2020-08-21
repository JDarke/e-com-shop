import React from "react";
import "./forminput.styles.scss";

const FormInput = ({ handleChange, label, ...restOfInputProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...restOfInputProps}
    />
    {label ? (
    <label className={`${restOfInputProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
    </label>) : null}
  </div>
);

export default FormInput;
