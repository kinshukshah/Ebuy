export const INITIAL_STATE = {
  categoryFilter: [],
  brandsFilter: [],
  sort: "relevance",
};
export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY_LIST":
      const categoryExists = state.categoryFilter.includes(action.payload);
      if (categoryExists) {
        return {
          ...state,
          categoryFilter: [
            ...state.categoryFilter.filter((ele) => ele !== action.payload),
          ],
        };
      }
      return {
        ...state,
        categoryFilter: [...state.categoryFilter, action.payload],
      };

    case "UPDATE_BRANDS_LIST":
      const brandExists = state.brandsFilter.includes(action.payload);
      if (brandExists) {
        return {
          ...state,
          brandsFilter: [
            ...state.brandsFilter.filter((ele) => ele !== action.payload),
          ],
        };
      }
      return {
        ...state,
        brandsFilter: [...state.brandsFilter, action.payload],
      };
    case "UPDATE_SORT_LIST":
      return {
        ...state,
        sort: action.payload,
      };
    default:
      break;
  }
};
