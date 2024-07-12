import React, { useState, useContext } from "react";
import Layout from "../../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import AdminMenu from "../../Layout/AdminMenu";

const AddFlight = () => {
  const { auth } = useContext(AuthContext);

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
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log(JSON.stringify(flight));
  //     console.log(auth.id);
  //     const response = await fetch(
  //       `http://localhost:1010/admin/flight/add?adminId=${auth.id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //         body: JSON.stringify(flight),
  //       }
  //     );
  //   } catch (error) {
  //     console.error("Failed:", error.message);
  //     alert(`failed: ${error.message}`);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(flight);
      const response = await axios.post(
        `http://localhost:1010/admin/flight/add?adminId=${auth.id}`,
        JSON.stringify(flight),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      console.log("Flight added:", response.data);
      toast.success("Flight Added Successfully");
    } catch (error) {
      console.error("Failed:", error.message);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Add Flight Details"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Add Flight Details</h1>
            <div className="m-1 w-75">
              {/* <div className="mb-3">
                <input
                  type="text"
                  placeholder="write a name"
                  className="form-control"
                  name="adminId"
                  value={flight.adminId}
                  onChange={handleChange}
                />
              </div> */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Flight Number"
                  className="form-control"
                  name="flightNumber"
                  value={flight.flightNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="datetime-local"
                  name="departureTime"
                  value={flight.departureTime}
                  placeholder="Departure Time"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="datetime-local"
                  name="arrivalTime"
                  value={flight.arrivalTime}
                  onChange={handleChange}
                  placeholder="Arrival Time"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="airplane"
                  value={flight.airplane}
                  onChange={handleChange}
                  placeholder="Airplane"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="sourceAirport"
                  value={flight.sourceAirport}
                  onChange={handleChange}
                  placeholder="Source Airport"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="destinationAirport"
                  value={flight.destinationAirport}
                  placeholder="write a Destination Airport"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="businessClassSeats"
                  value={flight.businessClassSeats}
                  placeholder="write a business Class Seats"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="firstClassSeats"
                  value={flight.firstClassSeats}
                  onChange={handleChange}
                  placeholder="First Class Seats"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="firstClassPrice"
                  value={flight.firstClassPrice}
                  onChange={handleChange}
                  placeholder="First Class Price"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="economyClassSeats"
                  value={flight.economyClassSeats}
                  onChange={handleChange}
                  placeholder="Economy Class Seats"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="economyClassPrice"
                  value={flight.economyClassPrice}
                  onChange={handleChange}
                  placeholder="Economy Class Price"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="status"
                  value={flight.status}
                  onChange={handleChange}
                  placeholder="Status"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit Flight Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddFlight;
