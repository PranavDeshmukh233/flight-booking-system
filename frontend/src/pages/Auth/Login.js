import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import "../../styles/AuthStyles.css";
import Layout from "../../Layout/Layout";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthInfo, auth } = useContext(AuthContext);
  const navigate = useNavigate();

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

      if (data.statusCode === 200) {
        alert("Login successful!");
        const authObject = {
          email: data.users.email,
          id: data.users.id,
          token: data.token,
          role: data.users.role,
          name: data.users.name,
        };
        setAuthInfo(authObject);
        Cookies.set("auth", JSON.stringify(authObject), { expires: 1 }); // Expires in 1 day
        navigate("/");
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(`Login failed: ${error.message}`);
    }
  };

  useEffect(() => {
    console.log("Auth after update:", auth);
  }, [auth]);

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
