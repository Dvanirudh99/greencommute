package com.bc36gc.job;

import com.bc36gc.job.api.dto.JobDto;
import com.bc36gc.job.api.entity.Job;
import com.bc36gc.job.api.repository.JobRepository;
import com.bc36gc.job.api.service.JobService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = JobServiceApplication.class)
class JobServiceTests {
    @Mock
    JobRepository jobRepository;
    @InjectMocks
    JobService jobService;
    @Test
    void getAllJobsservicetest(){
        JobDto job1=new JobDto(1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km");
        JobDto job2=new JobDto(2,"software tester","hitech city","28 min ago","software apps","myntra","0-10km");
        List<Object[]> jobs=new ArrayList<>();
        jobs.add(new Object[]{1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km"});
        jobs.add(new Object[]{2,"software tester","hitech city","28 min ago","software apps","myntra","0-10km"});
        when(jobRepository.findbySkillandCompanyJobs()).thenReturn(jobs);
        System.out.println(jobs);
        List<JobDto> allJobs =jobService.getAllJobs();
        allJobs.add(job1);
        allJobs.add(job2);
        assertThat(allJobs).hasSize(4);
    }

    @Test
    void getJobbyId(){
        JobDto job1=new JobDto(1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km");
        List<Object[]> jobs=new ArrayList<>();
        jobs.add(new Object[]{1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km"});
        when(jobRepository.findByUserId(1)).thenReturn(jobs) ;
        JobDto job2=jobService.getJobbyId(1);
        Assertions.assertEquals(job2,job1);


    }
}
