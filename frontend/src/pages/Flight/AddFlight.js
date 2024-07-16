import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import "../../Styles/AddFlight.css";
import AdminMenu from "../../Layout/AdminMenu";

const AddFlight = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [flight, setFlight] = useState({
    adminId: auth.id,
    flightNumber: "",
    departureTime: "",
    arrivalTime: "",
    airplane: "",
    sourceAirport: "",
    destinationAirport: "",
    businessClassSeats: "",
    businessClassPrice: "",
    firstClassSeats: "",
    firstClassPrice: "",
    economyClassSeats: "",
    economyClassPrice: "",
    status: "Scheduled",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:1010/admin/flight/add?adminId=${auth.id}`,
        flight,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      toast.success("Flight Added Successfully!");
      alert("Flight Added Successfully!");
      navigate("/search");
    } catch (error) {
      console.error("Failed:", error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Add Flight Details"}>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title text-center">Add Flight Details</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mg-bt">
                <label htmlFor="flightNumber">Flight Number</label>
                <input
                  type="text"
                  placeholder="Enter Flight Number"
                  className="form-control"
                  name="flightNumber"
                  value={flight.flightNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="departureTime">Departure Time</label>
                  <input
                    type="datetime-local"
                    name="departureTime"
                    value={flight.departureTime}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="arrivalTime">Arrival Time</label>
                  <input
                    type="datetime-local"
                    name="arrivalTime"
                    value={flight.arrivalTime}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-group mg-bt">
                <label htmlFor="airplane">Airline</label>
                <input
                  type="text"
                  name="airplane"
                  value={flight.airplane}
                  onChange={handleChange}
                  placeholder="Enter Airline"
                  className="form-control"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="sourceAirport">Source Airport</label>
                  <input
                    type="text"
                    name="sourceAirport"
                    value={flight.sourceAirport}
                    onChange={handleChange}
                    placeholder="Enter Source Airport"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="destinationAirport">Destination Airport</label>
                  <input
                    type="text"
                    name="destinationAirport"
                    value={flight.destinationAirport}
                    onChange={handleChange}
                    placeholder="Enter Destination Airport"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="firstClassSeats">First Class Seats</label>
                  <input
                    type="number"
                    name="firstClassSeats"
                    value={flight.firstClassSeats}
                    onChange={handleChange}
                    placeholder="Enter First Class Seats"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="firstClassPrice">First Class Price</label>
                  <input
                    type="number"
                    name="firstClassPrice"
                    value={flight.firstClassPrice}
                    onChange={handleChange}
                    placeholder="Enter First Class Price"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="businessClassSeats">Business Class Seats</label>
                  <input
                    type="number"
                    name="businessClassSeats"
                    value={flight.businessClassSeats}
                    onChange={handleChange}
                    placeholder="Enter Business Class Seats"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="businessClassPrice">Business Class Price</label>
                  <input
                    type="number"
                    name="businessClassPrice"
                    value={flight.businessClassPrice}
                    onChange={handleChange}
                    placeholder="Enter Business Class Price"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="economyClassSeats">Economy Class Seats</label>
                  <input
                    type="number"
                    name="economyClassSeats"
                    value={flight.economyClassSeats}
                    onChange={handleChange}
                    placeholder="Enter Economy Class Seats"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mg-bt">
                  <label htmlFor="economyClassPrice">Economy Class Price</label>
                  <input
                    type="number"
                    name="economyClassPrice"
                    value={flight.economyClassPrice}
                    onChange={handleChange}
                    placeholder="Enter Economy Class Price"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-group mg-bt">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  value={flight.status}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Active">Active</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <button type="submit" className="btn-block button">
                Add Flight
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddFlight;
