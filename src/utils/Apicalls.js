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
