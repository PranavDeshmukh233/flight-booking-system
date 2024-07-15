package FlightBookingSystem.Service;

import FlightBookingSystem.Entity.Booking;
import FlightBookingSystem.Repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking addBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found!"));
    }

    public Booking updateBooking(Long id, Booking booking) {
        Booking existingBooking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found!"));
        existingBooking.setPassengerName(booking.getPassengerName());
        existingBooking.setPassengerContact(booking.getPassengerContact());
        existingBooking.setFlightNumber(booking.getFlightNumber());
        existingBooking.setAirplane(booking.getAirplane());
        existingBooking.setDepartureTime(booking.getDepartureTime());
        existingBooking.setArrivalTime(booking.getArrivalTime());
        existingBooking.setSourceAirport(booking.getSourceAirport());
        existingBooking.setDestinationAirport(booking.getDestinationAirport());
        existingBooking.setFlightClass(booking.getFlightClass());
        existingBooking.setSeatFare(booking.getSeatFare());
        existingBooking.setNoofseat(booking.getNoofseat());
        existingBooking.setBookingTime(booking.getBookingTime());
        return bookingRepository.save(existingBooking);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }
}
