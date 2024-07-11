package FlightBookingSystem.Controller;

import FlightBookingSystem.Entity.Flight;
import FlightBookingSystem.Service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping()
public class FlightSearchController {

    @Autowired
    private FlightService flightService;

    @GetMapping("/user/flight/search")
    public ResponseEntity<List<Flight>> searchFlights(
            @RequestParam String sourceAirport,
            @RequestParam String destinationAirport) {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            List<Flight> flights = flightService.searchFlights(sourceAirport, destinationAirport);
            return new ResponseEntity<>(flights, HttpStatus.OK);
    }

    @GetMapping("/admin/flight/search")
    public ResponseEntity<List<Flight>> searchFlightsAdmin(
            @RequestParam String sourceAirport,
            @RequestParam String destinationAirport) {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        List<Flight> flights = flightService.searchFlights(sourceAirport, destinationAirport);
        return new ResponseEntity<>(flights, HttpStatus.OK);
    }
}
