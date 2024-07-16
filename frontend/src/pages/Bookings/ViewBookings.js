import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Layout from "../../Layout/Layout";
import "../../Styles/ViewBookings.css";

const Bookings = () => {
  const { auth } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:1010/adminuser/booking/byUserId?userId=${auth.id}`,
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
        console.log("Bookings data:", data);
        setBookings(data);
      } catch (error) {
        console.error("Fetching bookings failed:", error.message);
        alert(`Fetching bookings failed: ${error.message}`);
      }
    };

    if (auth.id && auth.token) {
      fetchBookings();
    }
  }, [auth.id, auth.token]);

  return (
    <Layout title="User Bookings">
      <div className="container-fluid">
        <div className="row">
          <div className="form-container" style={{ minHeight: "90vh" }}>
            <h5 className="title">My Bookings</h5>
            {bookings.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Flight Number</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Source Airport</th>
                    <th>Destination Airport</th>
                    <th>Seat Class</th>
                    <th>No. of Seats</th>
                    <th>Seat Fare</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.id}</td>
                      <td>{booking.flightNumber}</td>
                      <td>
                        {new Date(booking.departureTime).toLocaleString()}
                      </td>
                      <td>{new Date(booking.arrivalTime).toLocaleString()}</td>
                      <td>{booking.sourceAirport}</td>
                      <td>{booking.destinationAirport}</td>
                      <td>{booking.flightClass}</td>
                      <td>{booking.noofseat}</td>
                      <td>{booking.seatFare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No bookings found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bookings;
