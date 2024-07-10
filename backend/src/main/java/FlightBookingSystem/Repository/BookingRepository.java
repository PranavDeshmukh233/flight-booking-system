package FlightBookingSystem.Repository;


import FlightBookingSystem.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Add custom queries if needed
}
