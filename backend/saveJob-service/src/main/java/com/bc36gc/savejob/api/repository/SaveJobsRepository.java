package com.bc36gc.savejob.api.repository;

import com.bc36gc.savejob.api.entity.SaveJobs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaveJobsRepository extends JpaRepository<SaveJobs,Integer> {
    SaveJobs findByJobId(int jobId);
}
