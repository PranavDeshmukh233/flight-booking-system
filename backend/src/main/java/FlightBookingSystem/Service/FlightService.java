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
                .orElseThrow(() -> new RuntimeException("Flight not found!"));
    }

    public Flight updateFlight(Long id, Flight flight) {
        Flight existingFlight = flightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Flight not found!"));
        existingFlight.setFlightNumber(flight.getFlightNumber());
        existingFlight.setDepartureTime(flight.getDepartureTime());
        existingFlight.setArrivalTime(flight.getArrivalTime());
        existingFlight.setAirplane(flight.getAirplane());
        existingFlight.setSourceAirport(flight.getSourceAirport());
        existingFlight.setDestinationAirport(flight.getDestinationAirport());
        existingFlight.setBusinessClassSeats(flight.getBusinessClassSeats());
        existingFlight.setBusinessClassPrice(flight.getBusinessClassPrice());
        existingFlight.setFirstClassSeats(flight.getFirstClassSeats());
        existingFlight.setFirstClassPrice(flight.getFirstClassPrice());
        existingFlight.setEconomyClassSeats(flight.getEconomyClassSeats());
        existingFlight.setEconomyClassPrice(flight.getEconomyClassPrice());
        existingFlight.setStatus(flight.getStatus());
        existingFlight.setAdminId(flight.getAdminId());
        return flightRepository.save(existingFlight);
    }

    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }

    public List<Flight> searchFlights(String sourceAirport, String destinationAirport) {
        return flightRepository.findFlightsBySourceDestination(sourceAirport, destinationAirport);
    }
}
