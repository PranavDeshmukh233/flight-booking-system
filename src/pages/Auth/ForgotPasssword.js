import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function

  return (
    <div className="form-container ">
      <form>
        <h4 className="title">RESET PASSWORD</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your favorite Sport Name "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter New Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          RESET
        </button>
      </form>
    </div>
  );
};

export default ForgotPasssword;
