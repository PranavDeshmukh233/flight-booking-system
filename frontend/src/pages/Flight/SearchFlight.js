import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { AuthContext } from "../../Context/AuthContext";
import "../../Styles/FlightSearch.css";

const FlightSearch = () => {
  const [sourceAirport, setSourceAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [flights, setFlights] = useState([]);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(auth.token);

    try {
      const response = await fetch(
        `http://localhost:1010/${auth.role.toLowerCase()}/flight/search?sourceAirport=${sourceAirport}&destinationAirport=${destinationAirport}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      setFlights(data);
    } catch (error) {
      console.error("Search failed:", error.message);
      alert(`Search failed: ${error.message}`);
    }
  };

  const handleBook = (flightId) => {
    navigate(`/bookFlight/${flightId}`);
  };

  return (
    <Layout title="Flight Search">
      <div className="container-fluid">
        <div className="row">
          <div className="form-container" style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSearch} className="search-form">
              <h5 className="title">Search Flights</h5>

              <div className="form-group">
                <input
                  type="text"
                  value={sourceAirport}
                  onChange={(e) => setSourceAirport(e.target.value)}
                  className="form-control"
                  placeholder="Enter Source Airport"
                  required
                />
                <input
                  type="text"
                  value={destinationAirport}
                  onChange={(e) => setDestinationAirport(e.target.value)}
                  className="form-control"
                  placeholder="Enter Destination Airport"
                  required
                />
                <button type="submit" className="button">
                  Search
                </button>
              </div>
            </form>

            {flights.length > 0 && (
              <div className="mt-4">
                <h4 className="title">Flights</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Flight Number</th>
                      <th>Departure Time</th>
                      <th>Arrival Time</th>
                      <th>Airplane</th>
                      <th>Source Airport</th>
                      <th>Destination Airport</th>
                      <th>Business Class Seats</th>
                      <th>Business Class Price</th>
                      <th>First Class Seats</th>
                      <th>First Class Price</th>
                      <th>Economy Class Seats</th>
                      <th>Economy Class Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flights.map((flight) => (
                      <tr key={flight.id}>
                        <td>{flight.flightNumber}</td>
                        <td>
                          {new Date(flight.departureTime).toLocaleString()}
                        </td>
                        <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                        <td>{flight.airplane}</td>
                        <td>{flight.sourceAirport}</td>
                        <td>{flight.destinationAirport}</td>
                        <td>{flight.businessClassSeats}</td>
                        <td>{flight.businessClassPrice}</td>
                        <td>{flight.firstClassSeats}</td>
                        <td>{flight.firstClassPrice}</td>
                        <td>{flight.economyClassSeats}</td>
                        <td>{flight.economyClassPrice}</td>
                        <td>{flight.status}</td>
                        <td>
                          <button
                            className="button"
                            onClick={() => handleBook(flight.id)}
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlightSearch;
