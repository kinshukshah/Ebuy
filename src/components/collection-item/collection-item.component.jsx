import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./collection-item.style.css";
import { Link } from "react-router-dom";

const CollectionItem = ({ items, routeName, title }) => {
  let spliceValue = routeName ? 4 : items.length;
  return (
    <div className="collection">
      <div className="collection-header">
        <h2>{title}</h2>
        {routeName ? (
          <Link to={`/shop/${routeName}`}>
            <button>View All</button>
          </Link>
        ) : null}
      </div>
      <div className="collection-row">
        {items.slice(0, spliceValue).map((ele) => (
          <MenuItem key={ele.id} element={ele} {...ele} />
        ))}
      </div>
    </div>
  );
};
export default CollectionItem;
