import React, { useState, useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./signup.styles.css";
import { loginUser, signup } from "../../utils/Apicalls";
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../hooks/useLoading";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/button-component/button-component";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState(null);

  const { user, dispatch } = useAuth();
  const [loading, stopLoading, startLoading] = useLoading();
  let navigate = useNavigate();
  useEffect(() => {
    if (password !== confPass) {
      setError("Both passwords must match!");
    } else {
      setError(null);
    }
  }, [confPass, password]);

  const handleSubmit = async (e) => {
    startLoading();
    e.preventDefault();
    let response = await signup(name, email, password);
    let loginRes =
      response.success && (await loginUser(dispatch, { email, password }));
    loginRes.success ? navigate("/") : navigate("/signup");
    stopLoading();
  };

  return (
    <div className="login-box">
      <div className="login-head">REGISTER</div>
      <div className="login-subhead">Please fill in the information below.</div>
      <form className="login-form-box" onSubmit={handleSubmit}>
        <FormInput
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormInput
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormInput
          placeholder="Confirm Password"
          onChange={(e) => setConfPass(e.target.value)}
          value={confPass}
        />
        <CustomButton type="submit" label="SIGN UP" inverse />
      </form>
      <div className="sub-text">
        <Link to="/login"> Already have an account? Log In</Link>
      </div>
      {error ? error : null}
      {loading}
    </div>
  );
}

export default SignUp;
