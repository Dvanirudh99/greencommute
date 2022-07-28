package com.bc36gc.savejob.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="save_jobs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveJobs {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="job_id")
    private int jobId;
}
