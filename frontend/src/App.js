import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Home from "./pages/Home/Home";
import FlightSearch from "./pages/Flight/FlightSearch";
import AddFlight from "./pages/Flight/AddFlight";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<FlightSearch />} />
        <Route path="/addFlight" element={<AddFlight />} />
      </Routes>
    </>
  );
}

export default App;
