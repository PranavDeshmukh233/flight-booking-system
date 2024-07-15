import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import Home from "./Pages/Home/Home";
import FlightSearch from "./Pages/Flight/SearchFlight";
import AddFlight from "./Pages/Flight/AddFlight";
import BookFlight from "./Pages/Flight/BookFlight";
import AddAirport from "./Pages/Flight/AddAirport";
import ViewBookings from "./Pages/Bookings/ViewBookings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<FlightSearch />} />
        <Route path="/addFlight" element={<AddFlight />} />
        <Route path="/addAirport" element={<AddAirport />} />
        <Route path="/bookFlight/:flightId" element={<BookFlight />} />
        <Route path="/bookings" element={<ViewBookings />} />
      </Routes>
    </>
  );
}

export default App;
