import React from "react";
import PageNotFoundImage from "../../assets/PageNotFound.svg";
import { Link } from "react-router-dom";
import "./PageNotFound.styles.css";
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
          <button> Back to Home page</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;