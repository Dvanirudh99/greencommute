package com.bc36gc.location.api.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="location")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Location {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name="location_id")
    private int id;
   @Column(name="address")
   private String address;
   @Column(name="aqi")
   private int aqi;
}
