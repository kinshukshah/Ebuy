import React from "react";
import "./shop.styles.css";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CategoryData } from "../../components/Utils";
const ShopPage = () => {
  return (
    <div className="small-container">
      {CategoryData.map((ele) => (
        <CollectionItem
          key={ele.category}
          routeName=""
          title={ele.category}
          category={ele.category}
        />
      ))}
    </div>
  );
};

export default ShopPage;
