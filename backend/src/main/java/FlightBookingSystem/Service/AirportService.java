package FlightBookingSystem.Service;

import FlightBookingSystem.Entity.Airport;
import FlightBookingSystem.Repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportService {

    @Autowired
    private AirportRepository airportRepository;

    public Airport addAirport(Airport airport) {
        return airportRepository.save(airport);
    }

    public List<Airport> getAllAirports() {
        return airportRepository.findAll();
    }

    public Airport getAirportById(Integer id) {
        return airportRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Airport not found"));
    }

    public Airport updateAirport(Integer id, Airport airport) {
        Airport existingAirport = airportRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Airport not found"));
        existingAirport.setName(airport.getName());
        // Update other fields as necessary
        return airportRepository.save(existingAirport);
    }

    public void deleteAirport(Integer id) {
        airportRepository.deleteById(id);
    }
}
