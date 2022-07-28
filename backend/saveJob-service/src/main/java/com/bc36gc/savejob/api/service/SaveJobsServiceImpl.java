package com.bc36gc.savejob.api.service;

import com.bc36gc.savejob.api.entity.SaveJobs;
import com.bc36gc.savejob.api.exception.JobNotFoundException;
import com.bc36gc.savejob.api.repository.SaveJobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaveJobsServiceImpl implements SaveJobsService {
    @Autowired
    private SaveJobsRepository saveJobsRepository;
    public List<SaveJobs> getSaveJobs() {
        return saveJobsRepository.findAll();
    }

    @Override
    public SaveJobs saveJob(SaveJobs saveJob) throws JobNotFoundException {
        SaveJobs saveJob1;
        try{
            saveJob1=saveJobsRepository.save(saveJob);
        }
        catch (Exception exception){
            throw new JobNotFoundException("Job with given Job Id " + saveJob.getJobId() + " does not exists or Job Id already exists");
        }
        return saveJob1;
    }

    @Override
    public String deleteSaveJobByJobId(int jobId) throws JobNotFoundException{
        SaveJobs job= saveJobsRepository.findByJobId(jobId);
        if(job==null)
            throw new JobNotFoundException("Job with given Job Id : " + jobId + " does not exist under saved jobs");
        saveJobsRepository.delete(job);
        return "Deleted job from the saved jobs with id "+jobId;
    }
}
