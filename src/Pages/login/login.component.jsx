import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import FormInput from "../../components/form-input/form-input.component";
import "./login.styles.css";
import { loginUser, logout } from "../../utils/Apicalls";
const Login = () => {
  const { user, dispatch } = useAuth();
  const [loading, stopLoading, startLoading] = useLoading();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let { state } = useLocation();
  let navigate = useNavigate();

  async function loginHandler(e) {
    startLoading();
    e.preventDefault();
    let response = await loginUser(dispatch, { email, password });
    stopLoading();
    response.success
      ? navigate(state?.from ? state.form : "/")
      : navigate("/login");
  }
  return (
    <div className="login-box">
      <div>Login</div>
      <form onSubmit={loginHandler} className="login-form-box">
        <FormInput
          label="Email"
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      {loading}
    </div>
  );
};

export { Login };
