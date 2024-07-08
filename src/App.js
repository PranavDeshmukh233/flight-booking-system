import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
