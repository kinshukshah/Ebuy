import React, { useState } from "react";
import "./shop.styles.css";
import SHOPDATA from "../../components/Data/shop.data";
import MenuItem from "../../components/menu-items/menu-item.component";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CategoryData } from "../../components/Utils";
const ShopPage = () => {
  const [shopitems, setShopItems] = useState(SHOPDATA);
  const shoparr = Object.keys(shopitems);
  return (
    <div className="small-container">
      {CategoryData.map((ele) => (
        <CollectionItem
          // key={shopitems[ele].id}
          key={ele.category}
          routeName=""
          title={ele.category}
          category={ele.category}
          // items={shopitems[ele].items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
