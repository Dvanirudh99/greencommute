package com.bc36gc.job.api.service;

import com.bc36gc.job.api.entity.Job;
import com.bc36gc.job.api.dto.JobDto;
import com.bc36gc.job.api.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public List<JobDto> getAllJobs() {
        List<Object[]> allJobs = jobRepository.findbySkillandCompanyJobs();
        List<JobDto> JobDtos = new ArrayList<>();
        for (Object[] o : allJobs) {

            JobDtos.add(new JobDto((Integer) o[0], (String) o[1], (String) o[2], (String) o[3], (String) o[4],
                    (String) o[5], (String) o[6]));
        }

        return JobDtos;
    }

    public JobDto getJobbyId(Integer id) {
        List<Object[]> jobByid = jobRepository.findByUserId(id);

        return new JobDto((Integer) jobByid.get(0)[0], (String) jobByid.get(0)[1], (String) jobByid.get(0)[2], (String) jobByid.get(0)[3], (String) jobByid.get(0)[4],
                    (String) jobByid.get(0)[5], (String) jobByid.get(0)[6]);
    }
}
