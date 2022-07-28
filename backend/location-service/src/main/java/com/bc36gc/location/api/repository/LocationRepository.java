package com.bc36gc.location.api.repository;

import com.bc36gc.location.api.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location,Integer> {

}
