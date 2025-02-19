import React, { useState } from "react";
import axios from "axios";


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? "http://localhost:5173/signup" : "http://localhost:5173/signin";

    try {
      const response = await axios.post(url, { email, password });
      alert(response.data.message || "Operation successful!");
    } catch (error) {
      alert(error.response?.data || "An error occurred.");
    }
  };

  return (
    <div className="auth-container mt-5">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default AuthPage;

