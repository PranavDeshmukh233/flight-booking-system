import React, { useState, useContext } from "react";
import Layout from "../../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import AdminMenu from "../../Layout/AdminMenu";

const AddAirport = () => {
  const { auth } = useContext(AuthContext);

  const [airport, setAirport] = useState({
    name: "",
    city: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirport({ ...airport, [name]: value });
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
      console.log(airport);
      const response = await axios.post(
        `http://localhost:1010/admin/airports/add`,
        JSON.stringify(airport),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      console.log("Airport added:", response.data);
      toast.success("Airport Added Successfully");
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
            <h1>Add Airport Details</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Airport Name"
                  className="form-control"
                  name="name"
                  value={airport.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="city"
                  value={airport.city}
                  onChange={handleChange}
                  placeholder="city"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="country"
                  value={airport.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit Airport Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddAirport;
