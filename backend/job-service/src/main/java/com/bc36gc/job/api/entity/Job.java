package com.bc36gc.job.api.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "job")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, name = "time_posted")
    private String timePosted;

    @Column(nullable = false, name = "skill_id")
    private Integer skillId;

    @Column(nullable = false, name = "company_id")
    private Integer companyId;

    @Column(nullable = false, name = "address")
    private String address;

    @Column(nullable = false, name = "role")
    private String role;

    @Column(nullable = false, name = "distance")
    private String distance;

}
