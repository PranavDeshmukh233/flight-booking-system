import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { AuthContext } from '../../Context/AuthContext';
import '../../Styles/Booking.css';

const BookingPage = () => {
  const { flightId } = useParams();
  const [flightDetails, setFlightDetails] = useState({});
  const [passengerName, setPassengerName] = useState('');
  const [passengerContact, setPassengerContact] = useState('');
  const [flightClass, setFlightClass] = useState('Economy');
  const [noOfSeats, setNoOfSeats] = useState(1);
  const [seatFare, setSeatFare] = useState(0);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        console.log(auth.token);
        const response = await fetch(`http://localhost:1010/adminuser/flight/${flightId}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        // console.log('Fetched flight details:', data); 
        setFlightDetails(data);
      } catch (error) {
        console.error('Failed to fetch flight details:', error.message);
      }
    };

    fetchFlightDetails();
  }, [flightId, auth.token]);

  useEffect(() => {
    if (flightDetails) {
      if (flightClass === 'Economy') {
        setSeatFare(flightDetails.economyClassPrice * noOfSeats);
      } else if (flightClass === 'First Class') {
        setSeatFare(flightDetails.firstClassPrice * noOfSeats);
      } else if (flightClass === 'Business') {
        setSeatFare(flightDetails.businessClassPrice * noOfSeats);
      }
    }
  }, [flightClass, noOfSeats, flightDetails]);

  useEffect(() => {
    if (auth.name) {
      setPassengerName(auth.name);
    }
  }, [auth.name]);

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      passengerName,
      passengerContact,
      flightNumber: flightDetails.flightNumber,
      airplane: flightDetails.airplane,
      departureTime: flightDetails.departureTime,
      arrivalTime: flightDetails.arrivalTime,
      sourceAirport: flightDetails.sourceAirport,
      destinationAirport: flightDetails.destinationAirport,
      flightClass,
      seatFare,
      noOfseat: noOfSeats,
      bookingTime: new Date().toISOString(),
      userId: auth.id,
    };

    try {
      const response = await fetch(`http://localhost:1010/user/booking/add?userId=${auth.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error.message);
      alert(`Booking failed: ${error.message}`);
    }
  };

  return (
    <Layout title="Book Flight">
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-center">
            <h5 className="card-title">Flight : {flightDetails.flightNumber || 'Loading...'}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{flightDetails.airplane || 'Loading...'}</h6>
          </div>
          <div className="card-body">
          <div className="row">
              <div className="col-md-6">
                <p className="card-text">
                  <strong>From</strong> 
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  <strong>To</strong> 
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="card-text">
                  {flightDetails.sourceAirport || 'Loading...'}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  {flightDetails.destinationAirport || 'Loading...'}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="card-text">
                  {flightDetails.departureTime ? new Date(flightDetails.departureTime).toLocaleString() : 'Loading...'}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  {flightDetails.arrivalTime ? new Date(flightDetails.arrivalTime).toLocaleString() : 'Loading...'}
                </p>
              </div>
            </div>
    
            <form onSubmit={handleBooking}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Passenger Name:</label>
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Passenger Contact:</label>
                    <input
                      type="text"
                      value={passengerContact}
                      onChange={(e) => setPassengerContact(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Class:</label>
                    <select value={flightClass} onChange={(e) => setFlightClass(e.target.value)} className="form-control">
                      <option value="Economy">Economy</option>
                      <option value="First Class">First Class</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Number of Seats:</label>
                    <input
                      type="number"
                      value={noOfSeats}
                      onChange={(e) => setNoOfSeats(Number(e.target.value))}
                      className="form-control"
                      min="1"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Total Fare: {seatFare}</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Book</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
