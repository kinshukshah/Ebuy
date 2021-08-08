export const AddToCartUtils = (element, CartContext) => {
  let isItemExisting = CartContext.find((ele) => ele.id === element.id);
  if (isItemExisting) {
    return CartContext.map((ele) =>
      ele.id === element.id ? { ...ele, quantity: ele.quantity + 1 } : ele
    );
  }
  return [...CartContext, { ...element, quantity: 1 }];
};

export const GetTotalItemUtils = (cartItems) => {
  return cartItems.reduce((a, b) => a + b.quantity, 0);
};

export const GetItemsByTags = (tag, products) => {
  const { name, value } = tag;
  return products.filter((item) => item[name] === value);
};

export const GetTotalPrice = (CartItems) => {
  if (CartItems.length > 0) {
    return CartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.productId.price,
      0
    );
  } else {
    return 0;
  }
};

export const GetAllBrands = (productList) => {
  const BrandArr = [];
  productList.map((product) => {
    const BrandExists = BrandArr.find(
      (ele) => ele.brandName === product.brandName
    );
    if (!BrandExists) {
      BrandArr.push({
        category: product.category,
        brandName: product.brandName,
      });
    }
  });
  return BrandArr;
};

const FilterByCategory = (filterList, productList) => {
  if (filterList.categoryFilter.length > 0) {
    return productList.filter((product) =>
      filterList.categoryFilter.includes(product.category) ? true : false
    );
  } else {
    return productList;
  }
};

const FilterByBrands = (filterList, productList) => {
  if (filterList.brandsFilter.length > 0) {
    return productList.filter((product) =>
      filterList.brandsFilter.includes(product.brandName) ? true : false
    );
  } else {
    return productList;
  }
};

const FilterBySort = (sortType, productList) => {
  if (sortType === "lowtohigh") {
    return productList.sort((a, b) => a.price - b.price);
  }
  if (sortType === "hightolow") {
    return productList.sort((a, b) => b.price - a.price);
  }
  return productList;
};

export const GetFilteredData = (filterList, productList) => {
  const products = [...productList];
  const sortedList = FilterBySort(filterList.sort, products);
  const ProductsByCategory = FilterByCategory(filterList, sortedList);
  const ProductsByBrands = FilterByBrands(filterList, ProductsByCategory);
  return ProductsByBrands;
};
