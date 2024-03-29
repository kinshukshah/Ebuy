import React from "react";
import "./button-component.styles.css";
const CustomButton = ({ label, inverse, ...props }) => {
  return (
    <button
      className={`${
        inverse ? "custom-btn btn-inverse" : "custom-btn btn-simple"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export { CustomButton };
