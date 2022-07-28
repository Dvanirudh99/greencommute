package com.bc36gc.company.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "company")
@Getter
@Setter
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Integer companyId;

    @Column(name = "location_id")
    private Integer locationId;

    @Column(name = "company_name")
    private String companyName;

    public Company(Integer companyId, Integer locationId, String companyName) {
        this.companyId = companyId;
        this.locationId = locationId;
        this.companyName = companyName;
    }

    public Company() {}
}