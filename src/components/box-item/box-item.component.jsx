import React from "react";
import './box-item.style.css';
export const BoxItem = ({ children }) => {
  return (
  <div className="box">{children}</div>
  );
};
