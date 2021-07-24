let isLogin = localStorage?.getItem("currentUser")
  ? JSON.parse(localStorage?.getItem("currentUser")).isLogin
  : false;
let token = localStorage?.getItem("currentUser")
  ? JSON.parse(localStorage?.getItem("currentUser")).user.token
  : "";
let user = localStorage?.getItem("currentUser")
  ? JSON.parse(localStorage?.getItem("currentUser")).user
  : null;

export const INITIAL_STATE = {
  isLogin,
  token,
  user,
  errorMessage: null,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        token: action.payload.user.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        user: null,
        token: "",
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};
