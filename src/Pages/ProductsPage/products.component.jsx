import React, { useReducer, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import queryString from "query-string";
function Products() {
  const { products } = useProducts();
  const {
    userState: { itemsInWishlist },
  } = useUserState();
  const [filterList, setFilterList] = useReducer(FilterReducer, INITIAL_STATE);
  const { search } = useLocation();
  // const filteredList = {
  //   categoryFilter: [],
  //   brandsFilter: [],
  //   sort: "relevance",
  // };
  const categoryList = queryString.parse(search).category
    ? typeof queryString.parse(search).category === "string"
      ? [queryString.parse(search).category]
      : queryString.parse(search).category
    : [];
  const brandsList = queryString.parse(search).brands
    ? typeof queryString.parse(search).brands === "string"
      ? [queryString.parse(search).brands]
      : queryString.parse(search).brands
    : [];
  const sort = queryString.parse(search).sort || "relevance";
  console.log({ categoryList, brandsList, sort });
  // const filterList = {
  //   categoryFilter: categoryList,
  //   brandsFilter: brandsList,
  //   sort,
  // };
  const filteredData = products && GetFilteredData(filterList, products);
  const BrandsList = products && GetAllBrands(products);
  useEffect(() => {
    // category &&
    //   setFilterList({ type: "UPDATE_CATEGORY_LIST", payload: category });
    // brands && setFilterList({ type: "UPDATE_BRANDS_LIST", payload: brands });
    const categoryList = queryString.parse(search).category
      ? typeof queryString.parse(search).category === "string"
        ? queryString.parse(search).category
        : queryString.parse(search).category
      : "";

    categoryList &&
      setFilterList({ type: "UPDATE_CATEGORY_LIST", payload: categoryList });
  }, []);
  return (
    <div className="products-page">
      <div className="products-page-conatiner">
        <aside className="products-filter">
          <ProductsFilter
            filterList={filterList}
            setFilterList={setFilterList}
            BrandsList={BrandsList}
          />
        </aside>
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
    </div>
  );
}

export default Products;
