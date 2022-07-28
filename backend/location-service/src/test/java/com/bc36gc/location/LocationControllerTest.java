package com.bc36gc.location;

import com.bc36gc.location.api.controller.LocationController;
import com.bc36gc.location.api.entity.Location;
import com.bc36gc.location.api.service.LocationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = LocationServiceApplication.class)
 class LocationControllerTest {
    @InjectMocks
    LocationController locationController;
    @Mock
    LocationService locationService;

    @Test
    void getAllSkillsTest(){
        Location location = new Location(1 ,"AP" , 10) ;
        Location location2 = new Location(2 ,"telangana" , 13) ;
        List<Location> locationsList = new ArrayList<>();
        locationsList.add(location) ;
        locationsList.add(location2) ;
        when(locationService.getAllLocations()).thenReturn(locationsList) ;
        List<Location> allSkills = locationController.getLocations();
        assertThat(allSkills).hasSize(2);
        assertThat(allSkills.get(0).getAddress()).isEqualTo(location.getAddress());
        assertThat(allSkills.get(1).getAddress()).isEqualTo(location2.getAddress());
    }
    @Test
    void getLocationbyIdTest(){
        Optional<Location> location= Optional.of(new  Location(1 ,"AP" , 10));
        when(locationService.getLocationById(1)).thenReturn(location) ;
        Optional<Location> location1= locationController.getLocationbyId(1);
        Assertions.assertEquals(location1,location);
    }

}
