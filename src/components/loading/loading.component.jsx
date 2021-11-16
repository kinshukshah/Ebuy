import React from "react";
import Spinner from "../../assets/Spinner.gif";
import "./loading.styles.css";

function Loading() {
  return (
    <div className="fp-container">
      <img className="fp-loading" src={Spinner} alt="loading.."></img>
    </div>
  );
}

export default Loading;
