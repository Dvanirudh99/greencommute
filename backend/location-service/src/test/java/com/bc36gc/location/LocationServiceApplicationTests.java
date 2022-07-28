package com.bc36gc.location;

import com.bc36gc.location.api.controller.LocationController;
import com.bc36gc.location.api.entity.Location;
import com.bc36gc.location.api.repository.LocationRepository;
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
import static org.mockito.Mockito.*;

@SpringBootTest(classes ={LocationServiceApplication.class})
class LocationServiceApplicationTests {
	@Mock
	private LocationRepository locationRepository;
	@InjectMocks
	LocationController locationController;
	@InjectMocks
	private LocationService locationService;
	@Test
	void contextLoads() {
		assertThat(locationController).isNotNull();
	}
	@Test
	void getAllLocations() {
		Location location = new Location(1 ,"AP" , 10) ;
		Location location2 = new Location(2 ,"telangana" , 13) ;
		List<Location> locationsList = new ArrayList<>();
		locationsList.add(location) ;
		locationsList.add(location2) ;
		when(locationRepository.findAll()).thenReturn(locationsList) ;
		Assertions.assertEquals(locationsList,locationService.getAllLocations());
		verify(locationRepository).findAll() ;
	}
	@Test
	void getLocationbyIdTest(){
		Optional<Location> skill= Optional.of(new Location(1 ,"AP" , 10));
		when(locationRepository.findById(1)).thenReturn(skill) ;
		Optional<Location> skill1= locationService.getLocationById(1);
		Assertions.assertEquals(skill1,skill);
	}
	@Test
	void findByIdException() {
		Location location = new  Location(1 ,"AP" , 10);
		when(locationRepository.findById(2)).thenReturn(Optional.of(location));
		assertThrows(RuntimeException.class, ()-> locationService.getLocationById(57));
	}
}
