import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ path, element, children }) => {
  const {
    user: { isLogin },
  } = useAuth();
  return isLogin ? (
    children
  ) : (
    <Navigate replace state={{ from: path }} to="/login" />
  );
};

export default PrivateRoute;
