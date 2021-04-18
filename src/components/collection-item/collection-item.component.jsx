import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./collection-item.style.css";
import { Link } from "react-router-dom";

const CollectionItem = ({ items, routeName, title }) => {
  return (
    <div className="collection">
      <div className="collection-header">
        <h2>{title}</h2>
        <Link to={`/shop/${routeName}`}>
          <button>View All</button>
        </Link>
      </div>
      <div className="collection-row">
        {items.slice(0, 4).map((ele) => (
          <MenuItem key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
};
export default CollectionItem;
