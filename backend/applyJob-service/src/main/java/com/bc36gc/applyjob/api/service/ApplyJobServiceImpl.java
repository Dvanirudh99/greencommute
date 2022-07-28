package com.bc36gc.applyjob.api.service;

import com.bc36gc.applyjob.api.entity.ApplyJob;
import com.bc36gc.applyjob.api.exception.JobNotFoundException;
import com.bc36gc.applyjob.api.repository.ApplyJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyJobServiceImpl implements ApplyJobService {

  @Autowired ApplyJobRepository applyJobRepository;

  @Override
  public List<ApplyJob> getAllAppliedJobs() {
    return applyJobRepository.findAll();
  }

  @Override
  public ApplyJob applyJob(ApplyJob applyJob) throws JobNotFoundException {
    ApplyJob applyJob1;
    try {
      applyJob1 = applyJobRepository.save(applyJob);
    } catch (Exception e) {
      throw new JobNotFoundException(
          "Job with given Job Id " + applyJob.getJobId() + " does not exist");
    }
    return applyJob1;
  }

  @Override
  public void deleteAppliedJobByJobId(int jobId) throws JobNotFoundException {
    ApplyJob applyJob = applyJobRepository.findByJobId(jobId);
    if (applyJob == null) {
      throw new JobNotFoundException(
          "Job with given Job Id : " + jobId + " does not exist under applied jobs");
    }
    applyJobRepository.delete(applyJob);
  }
}
