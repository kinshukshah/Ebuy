import React, { useState } from "react";
import { CategoryData } from "../Utils";
import "./products-filter.styles.css";
const ProductsFilter = ({ filterList, setFilterList, BrandsList }) => {
  const [brandsMin, setBrandsMin] = useState(true);
  //const brandsSpliceNo = brandsMin ? 5 : BrandsList.length;
  // const brandsSpliceNo = 10;
  return (
    <>
      <div className="one-category">
        <div className="list-title">Price</div>
        <div className="sort checkbox">
          <label>
            <input
              type="radio"
              onChange={() =>
                setFilterList({
                  type: "UPDATE_SORT_LIST",
                  payload: "lowtohigh",
                })
              }
              checked={filterList.sort === "lowtohigh" ? true : false}
            />
            Low To High
          </label>
          <label>
            <input
              type="radio"
              onChange={() =>
                setFilterList({
                  type: "UPDATE_SORT_LIST",
                  payload: "hightolow",
                })
              }
              checked={filterList.sort === "hightolow" ? true : false}
            />
            High To Low
          </label>
        </div>
      </div>
      <div className="one-category">
        <div className="list-title">Products Filter</div>
        <div className="products-filter checkbox">
          <ul>
            {CategoryData.map((item, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() =>
                      setFilterList({
                        type: "UPDATE_CATEGORY_LIST",
                        payload: item.category,
                      })
                    }
                    checked={
                      filterList.categoryFilter.includes(item.category)
                        ? true
                        : false
                    }
                  />
                  {item.category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="one-category">
        <div className="list-title">Brand Name</div>
        <div className="brands-filter checkbox">
          <ul>
            {BrandsList &&
              BrandsList.map((item, idx) => (
                <li key={idx}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setFilterList({
                          type: "UPDATE_BRANDS_LIST",
                          payload: item.brandName,
                        })
                      }
                      checked={
                        filterList.brandsFilter.includes(item.brandName)
                          ? true
                          : false
                      }
                    />
                    {item.brandName}
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {/* {BrandsList && (
          <span
            onClick={() => setBrandsMin(false)}
            style={!brandsMin ? { display: "none" } : { display: "block" }}
          >
            +{BrandsList.length - 5} More
          </span>
        )} */}
      </div>
    </>
  );
};

export { ProductsFilter };
