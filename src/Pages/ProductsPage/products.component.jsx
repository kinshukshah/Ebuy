import React, { useReducer } from "react";
import { useProducts } from "../../context/ProductContext";
import MenuItem from "../../components/menu-items/menu-item.component";
import "./products.styles.css";
import { useUserState } from "../../context/StateContext";
import { ProductsFilter } from "../../components/products-filter/products-filter.component";
import { FilterReducer, INITIAL_STATE } from "../../reducers/FilterReducer";
import {
  GetAllBrands,
  GetFilteredData,
} from "../../components/Utils/functions.utils";
function Products() {
  const { products } = useProducts();
  const {
    userState: { itemsInWishlist },
  } = useUserState();
  const [filterList, setFilterList] = useReducer(FilterReducer, INITIAL_STATE);
  const filteredData = products && GetFilteredData(filterList, products);
  const BrandsList = products && GetAllBrands(products);
  return (
    <div className="products-page">
      <div className="products-filter">
        <ProductsFilter
          filterList={filterList}
          setFilterList={setFilterList}
          BrandsList={BrandsList}
        />
      </div>
      <div className="products-row">
        {products
          ? filteredData.map((item) => {
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
