import React, { useState } from "react";
import "./latest-product.styles.css";
import MenuItem from "../menu-items/menu-item.component";

const LatProducts = [
  {
    id: 10,
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    price: 220,
  },
  {
    id: 11,
    name: "Adidas Yeezy",
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    price: 280,
  },
  {
    id: 12,
    name: "Black Converse",
    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
    price: 110,
  },
  {
    id: 13,
    name: "Nike White AirForce",
    imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
    price: 160,
  },
];

const LatestProduct = () => {
  const [latestproducts, setlatestProducts] = useState(LatProducts);
  return (
    <>
      <h2 className="feature-title">Latest Products</h2>
      <div className="featuredrow">
        {latestproducts.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default LatestProduct;
