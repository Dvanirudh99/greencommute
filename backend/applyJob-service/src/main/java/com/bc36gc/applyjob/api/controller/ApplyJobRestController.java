package com.bc36gc.applyjob.api.controller;

import com.bc36gc.applyjob.api.entity.ApplyJob;
import com.bc36gc.applyjob.api.exception.JobNotFoundException;
import com.bc36gc.applyjob.api.service.ApplyJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apply-jobs")
public class ApplyJobRestController {
    @Autowired
    private ApplyJobService applyJobsService;

    @GetMapping("/")
    public List<ApplyJob> getSaveJobs() {
        return applyJobsService.getAllAppliedJobs();
    }

    @PostMapping("/{jobId}")
    public ApplyJob applyJob(@PathVariable int jobId) throws JobNotFoundException  {
        ApplyJob applyJob=new ApplyJob();
        applyJob.setJobId(jobId);
         return applyJobsService.applyJob(applyJob);

    }

    @DeleteMapping("/{jobId}")
    public void deleteAppliedJob(@PathVariable int jobId) throws JobNotFoundException {
            applyJobsService.deleteAppliedJobByJobId(jobId);
    }

}

