package FlightBookingSystem.Controller;

import FlightBookingSystem.Entity.Airport;
import FlightBookingSystem.Service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/airports")
public class AirportController {

    @Autowired
    private AirportService airportService;

    @PostMapping("/add")
    public ResponseEntity<Airport> addAirport(@RequestBody Airport airport) {
        Airport addedAirport = airportService.addAirport(airport);
        return ResponseEntity.status(201).body(addedAirport);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Airport>> getAllAirports() {
        List<Airport> airports = airportService.getAllAirports();
        return ResponseEntity.ok(airports);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Airport> getAirportById(@PathVariable Integer id) {
        Airport airport = airportService.getAirportById(id);
        return ResponseEntity.ok(airport);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Airport> updateAirport(@PathVariable Integer id, @RequestBody Airport airport) {
        Airport updatedAirport = airportService.updateAirport(id, airport);
        return ResponseEntity.ok(updatedAirport);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAirport(@PathVariable Integer id) {
        airportService.deleteAirport(id);
        return ResponseEntity.noContent().build();
    }
}
