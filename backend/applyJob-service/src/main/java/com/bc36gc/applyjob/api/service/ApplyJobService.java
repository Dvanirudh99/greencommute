package com.bc36gc.applyjob.api.service;

import com.bc36gc.applyjob.api.entity.ApplyJob;
import com.bc36gc.applyjob.api.exception.JobNotFoundException;

import java.util.List;

public interface ApplyJobService {
  List<ApplyJob> getAllAppliedJobs();

  ApplyJob applyJob(ApplyJob applyJob) throws JobNotFoundException;

  void deleteAppliedJobByJobId(int jobId) throws JobNotFoundException;
}
