package FlightBookingSystem.Controller;

import FlightBookingSystem.Entity.Booking;
import FlightBookingSystem.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adminuser/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking, @RequestParam Long userId) {
        booking.setUserId(userId);
        Booking addedBooking = bookingService.addBooking(booking);
        return new ResponseEntity<>(addedBooking, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/byBookingId/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/byUserId")
    public ResponseEntity<List<Booking>> getBookingsByUserId(@RequestParam Long userId) {
        List<Booking> userBookings = bookingService.getBookingsByUserId(userId);
        return new ResponseEntity<>(userBookings, HttpStatus.OK);
    }
}
