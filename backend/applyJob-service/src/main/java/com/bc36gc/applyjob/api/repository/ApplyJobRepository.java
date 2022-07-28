package com.bc36gc.applyjob.api.repository;

import com.bc36gc.applyjob.api.entity.ApplyJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyJobRepository extends JpaRepository<ApplyJob,Integer> {
  ApplyJob findByJobId(int jobId);
}
