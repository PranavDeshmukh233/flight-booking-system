import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../styles/AuthStyles.css";
import Layout from "../../Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:1010/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data);
      console.log("response: " + response);
      
      if (data.statusCode == 200) {
        alert("Login successful!");
        navigate("/");
      } else {
        console.error("Login failed:", data.message); 
      }
    } catch (error) {
      console.error("Login failed:", error.message); 
    }
  };

  return (
    <Layout title="Login">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

          <div className="mt-3 text-center">
            <span>Do you have an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
