package FlightBookingSystem.Repository;


import FlightBookingSystem.Entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    @Query("SELECT f FROM Flight f WHERE f.sourceAirport = :sourceAirport AND f.destinationAirport = :destinationAirport")
    List<Flight> findFlightsBySourceDestinationAndDateRange(@Param("sourceAirport") String sourceAirport,
                                                            @Param("destinationAirport") String destinationAirport);
}
