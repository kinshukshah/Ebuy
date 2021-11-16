import React from "react";
import PageNotFoundImage from "../../assets/PageNotFound.svg";
import { Link } from "react-router-dom";
import "./PageNotFound.styles.css";
import { CustomButton } from "../../components/button-component/button-component";
function PageNotFound() {
  return (
    <div className="pagenotfound">
      <div className="pagenotfound-image">
        <img src={PageNotFoundImage} alt="PageNotFound"></img>
      </div>
      <div className="pagenotfound-content">
        <h2>Sorry :(</h2>
        <span>The requested page does not exist</span>
        <Link to="/">
          <CustomButton label="Back to HomePage" inverse />
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
