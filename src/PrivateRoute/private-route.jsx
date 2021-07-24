import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ path, element }) => {
  const {
    user: { isLogin },
  } = useAuth();
  return isLogin ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate replace state={{ from: path }} to="/login" />
  );
};

export default PrivateRoute;
