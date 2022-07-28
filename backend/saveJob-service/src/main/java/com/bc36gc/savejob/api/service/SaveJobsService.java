package com.bc36gc.savejob.api.service;

import com.bc36gc.savejob.api.entity.SaveJobs;
import com.bc36gc.savejob.api.exception.JobNotFoundException;

import java.util.List;

public interface SaveJobsService {
    List<SaveJobs> getSaveJobs();
    SaveJobs saveJob(SaveJobs saveJob) throws JobNotFoundException;

    String deleteSaveJobByJobId(int jobId) throws JobNotFoundException;
}
