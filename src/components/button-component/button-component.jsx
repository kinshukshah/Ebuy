import React from "react";
import "./button-component.styles.css";
const CustomButton = ({ label, ...props }) => {
  return (
    <button className="custom-btn" {...props}>
      {label}
    </button>
  );
};

export { CustomButton };
