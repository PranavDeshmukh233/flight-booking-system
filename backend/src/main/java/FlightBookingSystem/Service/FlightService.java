package FlightBookingSystem.Service;

import FlightBookingSystem.Entity.Flight;
import FlightBookingSystem.Repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Flight getFlightById(Long id) {
        return flightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Flight not found"));
    }

    public Flight updateFlight(Long id, Flight flight) {
        Flight existingFlight = flightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Flight not found"));
        existingFlight.setFlightNumber(flight.getFlightNumber());
        existingFlight.setDepartureTime(flight.getDepartureTime());
        existingFlight.setArrivalTime(flight.getArrivalTime());
        existingFlight.setAirplaneRegistrationNumber(flight.getAirplaneRegistrationNumber());
        existingFlight.setSourceAirport(flight.getSourceAirport());
        existingFlight.setDestinationAirport(flight.getDestinationAirport());
        existingFlight.setFlightClass(flight.getFlightClass());
        existingFlight.setSeatFare(flight.getSeatFare());
        existingFlight.setTotalPassengers(flight.getTotalPassengers());
        existingFlight.setBookingTime(flight.getBookingTime());
        existingFlight.setStatus(flight.getStatus());
        return flightRepository.save(existingFlight);
    }

    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }

    public List<Flight> searchFlights(String sourceAirport, String destinationAirport) {
        return flightRepository.findFlightsBySourceDestinationAndDateRange(sourceAirport, destinationAirport);
    }
}
