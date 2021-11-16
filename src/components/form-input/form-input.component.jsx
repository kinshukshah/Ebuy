import React from "react";
import "./form-input.styles.css";
function FormInput({ label, ...props }) {
  return (
    <div className="input-label">
      {/* <label className="form-label" for={label}>
        {label}
      </label> */}
      <input className="form-input" id={label} {...props}></input>
    </div>
  );
}

export default FormInput;
