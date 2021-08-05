import React from "react";
import { useProducts } from "../../context/ProductContext";
import MenuItem from "../../components/menu-items/menu-item.component";
import "./products.styles.css";
import { useUserState } from "../../context/StateContext";
function Products() {
  const { products } = useProducts();
  const {
    userState: { itemsInWishlist },
  } = useUserState();
  console.log(products);
  return (
    <div className="products-page">
      <div className="products-filter">Products Filter</div>
      <div className="products-row">
        {products
          ? products.map((item) => {
              const itemInWishlistExists = itemsInWishlist.find(
                (ele) => ele.productId._id === item._id
              );
              return (
                <MenuItem
                  key={item._id}
                  element={item}
                  wishlistExists={itemInWishlistExists ? true : false}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Products;
