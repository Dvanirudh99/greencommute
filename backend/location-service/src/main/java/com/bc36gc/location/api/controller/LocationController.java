package com.bc36gc.location.api.controller;

import com.bc36gc.location.api.entity.Location;
import com.bc36gc.location.api.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/location")
public class LocationController {
    @Autowired
    private LocationService locationService;
    @GetMapping("/")
    public List<Location> getLocations() {
        return locationService.getAllLocations();
    }
    @GetMapping(value = "/{id}")
    public Optional<Location> getLocationbyId(@PathVariable("id") Integer id) {
        return locationService.getLocationById(id);
    }

}
