import React, { useState } from "react";
import { CategoryData } from "../Utils";
const ProductsFilter = ({ filterList, setFilterList, BrandsList }) => {
  const [brandsMin, setBrandsMin] = useState(true);
  const brandsSpliceNo = brandsMin ? 5 : BrandsList.length;
  return (
    <div>
      Products Filter
      
      <div>
        <ul>
          {CategoryData.map((item) => (
            <li>
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
      <div>
        Brand Name
        <ul>
          {BrandsList &&
            BrandsList.splice(0, brandsSpliceNo).map((item) => (
              <li>
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
        {BrandsList && (
          <span
            onClick={() => setBrandsMin(false)}
            style={!brandsMin ? { display: "none" } : { display: "block" }}
          >
            +{BrandsList.length - 5} More
          </span>
        )}
      </div>
    </div>
  );
};

export { ProductsFilter };
