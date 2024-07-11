import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import Home from "./Pages/Home";
import FlightSearch from "./Pages/Flight/FlightSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<FlightSearch />} />
      </Routes>
    </>
  );
}

export default App;
