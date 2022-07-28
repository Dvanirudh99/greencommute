package com.bc36gc.job.api.controller;

import com.bc36gc.job.api.entity.Job;
import com.bc36gc.job.api.exception.JobNotFoundException;
import com.bc36gc.job.api.dto.JobDto;
import com.bc36gc.job.api.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/")
    public List<JobDto> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping(value = "/{id}")
    public JobDto getJobbyId(@PathVariable("id") Integer id) {
        return jobService.getJobbyId(id);
    }
}
