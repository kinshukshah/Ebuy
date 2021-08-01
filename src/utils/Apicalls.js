import axios from "axios";

const BASE_API_URL = "https://shopify-backend.kinshukshah.repl.co/api";

export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let { data } = await axios.post(`${BASE_API_URL}/user/login`, loginPayload);
    if (data.success) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage?.setItem(
        "currentUser",
        JSON.stringify({ isLogin: true, user: data.user })
      );
      return data;
    }
    dispatch({ type: "LOGIN_ERROR", error: data.error });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error.message });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
};

export const signup = async (name, email, password) => {
  try {
    let { data } = await axios.post(`${BASE_API_URL}/user/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    alert("Sign up error");
  }
};

export const getProducts = async (setProducts) => {
  try {
    let { data } = await axios.get(`${BASE_API_URL}/products/getProducts`);
    data.success && setProducts(data.products);
    console.log(data);
  } catch (error) {
    alert("Could not fetch products");
  }
};

export const getUserCartDetails = async (dispatch) => {
  let userId = localStorage?.getItem("currentUser")
    ? JSON.parse(localStorage?.getItem("currentUser")).user._id
    : null;
  try {
    if (userId) {
      let { data } = await axios.get(`${BASE_API_URL}/cart/${userId}`);
      if (data.success && data.cartList != null) {
        dispatch({
          type: "INITIALIZE_CART",
          payload: { cartItems: data.cartList.cartItems },
        });
      } else {
        return;
      }
    }
  } catch (error) {
    alert("Could not fetch user cart list");
  }
};

export const updateCart = async (dispatch, productId, userId, action) => {
  try {
    let { data } = await axios.post(
      `${BASE_API_URL}/cart/${userId}/${productId}?action=${action}`
    );
    console.log(data);
    data.success &&
      dispatch({
        type: "ADD_TO_CART",
        payload: { cartItems: data.cart.cartItems },
      });
  } catch (error) {
    alert("Could not update user cart list");
  }
};

export const removeCartItem = async (dispatch, productId, userId) => {
  try {
    let { data } = await axios.delete(
      `${BASE_API_URL}/cart/${userId}/${productId}`
    );
    data.success &&
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { cartItems: data.cart.cartItems },
      });
  } catch (error) {
    alert("Could not remove the cart item");
  }
};
