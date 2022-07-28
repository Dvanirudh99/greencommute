package com.bc36gc.location.api.service;

import com.bc36gc.location.api.entity.Location;
import com.bc36gc.location.api.exception.LocationNotFoundException;
import com.bc36gc.location.api.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {
    @Autowired
    private LocationRepository locationRepository;
    public List<Location> getAllLocations(){
        return locationRepository.findAll();
    }
    public Optional<Location> getLocationById(Integer id) {
        Optional<Location> result = locationRepository.findById(id);
        if (result.isEmpty()) {
            throw new LocationNotFoundException("Did not find company id - " +id);
        }
        return result;
    }


}
