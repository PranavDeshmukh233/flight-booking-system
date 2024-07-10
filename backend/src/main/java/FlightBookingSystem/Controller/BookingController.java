package FlightBookingSystem.Controller;

import FlightBookingSystem.Entity.Booking;
import FlightBookingSystem.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
        Booking addedBooking = bookingService.addBooking(booking);
        return new ResponseEntity<>(addedBooking, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
//        Booking updatedBooking = bookingService.updateBooking(id, booking);
//        return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
