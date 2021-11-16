import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import FormInput from "../../components/form-input/form-input.component";
import "./login.styles.css";
import { loginUser } from "../../utils/Apicalls";
import { CustomButton } from "../../components/button-component/button-component";
const Login = () => {
  const { user, dispatch } = useAuth();
  const [loading, stopLoading, startLoading] = useLoading();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let { state } = useLocation();
  let navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    startLoading();
    let response = await loginUser(dispatch, { email, password });
    stopLoading();
    console.log({ response, state });
    response.success
      ? navigate(state?.from ? state.from : "/")
      : navigate("/login");
  };
  return (
    <div className="login-box">
      <div className="login-head">Login</div>
      <div className="login-subhead">Please enter your email and password.</div>
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
        <CustomButton type="submit" label="LOGIN" inverse={true} />
      </form>
      <div className="sub-text">
        <Link to="/signup">Don't have an account? Sign Up!</Link>
      </div>
      {loading}
    </div>
  );
};

export { Login };
