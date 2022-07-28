package com.bc36gc.savejob.api.controller;

import com.bc36gc.savejob.api.entity.SaveJobs;
import com.bc36gc.savejob.api.service.SaveJobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/save-jobs")
public class SaveJobsRestController {
    @Autowired
    private SaveJobsService saveJobsService;

    @GetMapping("/")
    public List<SaveJobs> getSaveJobs() {
        return saveJobsService.getSaveJobs();
    }

    @PostMapping("/{jobId}")
    public SaveJobs saveJob(@PathVariable int jobId){
        SaveJobs saveJob=new SaveJobs();
        saveJob.setJobId(jobId);
        return saveJobsService.saveJob(saveJob);
    }

    @DeleteMapping("/{jobId}")
    public String deleteSaveJob(@PathVariable int jobId){
        return saveJobsService.deleteSaveJobByJobId(jobId);
    }
}
