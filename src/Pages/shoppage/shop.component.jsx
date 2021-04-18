import React, { useState } from "react";
import "./shop.styles.css";
import SHOPDATA from "../../components/Data/shop.data";
import MenuItem from "../../components/menu-items/menu-item.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

const ShopPage = () => {
  const [shopitems, setShopItems] = useState(SHOPDATA);
  const shoparr = Object.keys(shopitems);
  return (
    <div className="small-container">
      {shoparr.map((ele) => (
        <CollectionItem
          key={shopitems[ele].id}
          routeName={shopitems[ele].routeName}
          title={shopitems[ele].title}
          items={shopitems[ele].items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
