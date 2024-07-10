package FlightBookingSystem.Repository;


import FlightBookingSystem.Entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport, Integer> {
    // Add custom queries if needed
}
