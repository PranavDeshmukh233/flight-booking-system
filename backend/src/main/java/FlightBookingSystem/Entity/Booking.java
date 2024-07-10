package FlightBookingSystem.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String bookingId;
    private String passengerName;
    private String passengerContact;
    private String flightNumber;
    private String airplaneRegistrationNumber;
    private String departureTime;
    private String arrivalTime;
    private String sourceAirport;
    private String destinationAirport;
    private String flightClass;
    private double seatFare;
    private int noofseat;

    public int getNoofseat() {
        return noofseat;
    }

    public void setNoofseat(int noofseat) {
        this.noofseat = noofseat;
    }

    private String bookingTime;

    // Getters and setters

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getPassengerContact() {
        return passengerContact;
    }

    public void setPassengerContact(String passengerContact) {
        this.passengerContact = passengerContact;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getAirplaneRegistrationNumber() {
        return airplaneRegistrationNumber;
    }

    public void setAirplaneRegistrationNumber(String airplaneRegistrationNumber) {
        this.airplaneRegistrationNumber = airplaneRegistrationNumber;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getSourceAirport() {
        return sourceAirport;
    }

    public void setSourceAirport(String sourceAirport) {
        this.sourceAirport = sourceAirport;
    }

    public String getDestinationAirport() {
        return destinationAirport;
    }

    public void setDestinationAirport(String destinationAirport) {
        this.destinationAirport = destinationAirport;
    }

    public String getFlightClass() {
        return flightClass;
    }

    public void setFlightClass(String flightClass) {
        this.flightClass = flightClass;
    }

    public double getSeatFare() {
        return seatFare;
    }

    public void setSeatFare(double seatFare) {
        this.seatFare = seatFare;
    }

    public String getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(String bookingTime) {
        this.bookingTime = bookingTime;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }
}
