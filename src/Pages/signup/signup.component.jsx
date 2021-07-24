import React, { useState, useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./signup.styles.css";
import { loginUser, signup } from "../../utils/Apicalls";
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../hooks/useLoading";
import { useNavigate } from "react-router-dom";
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
    <div className="signup-box">
      <div>
        <h3>Sign up</h3>
      </div>
      <form className="form-box" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormInput
          label="Email"
          placeholder="you@yourcompany.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          placeholder="Enter the same password"
          onChange={(e) => setConfPass(e.target.value)}
          value={confPass}
        />
        <button type="submit">Sign up</button>
      </form>
      {error ? error : null}
      {loading}
    </div>
  );
}

export default SignUp;
