import React, { useState } from "react";
import "./featured.products.styles.css";

import MenuItem from "../menu-items/menu-item.component";

const featProducts = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
  },
  {
    id: 3,
    name: "Brown Cowboy",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
  },
  {
    id: 4,
    name: "Grey Brim",
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    price: 25,
  },
  {
    id: 5,
    name: "Green Beanie",
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    price: 18,
  },
  {
    id: 6,
    name: "Palm Tree Cap",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    price: 14,
  },
  {
    id: 7,
    name: "Red Beanie",
    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
    price: 18,
  },
  {
    id: 8,
    name: "Wolf Cap",
    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    price: 14,
  },
];
const FeaturedProducts = () => {
  const [products, setProducts] = useState(featProducts);
  return (
    <>
      <h2 className="feature-title">Featured Products</h2>
      <div className="featuredrow">
        {products.map((item) => (
          <MenuItem {...item} />
        ))}
      </div>
    </>
  );
};
export default FeaturedProducts;
