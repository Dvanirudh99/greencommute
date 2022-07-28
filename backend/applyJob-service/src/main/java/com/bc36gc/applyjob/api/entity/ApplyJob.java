package com.bc36gc.applyjob.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="applied_jobs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplyJob {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="job_id")
    private int jobId;
}
