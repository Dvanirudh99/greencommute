package com.bc36gc.job;

import com.bc36gc.job.api.controller.JobController;
import com.bc36gc.job.api.dto.JobDto;
import com.bc36gc.job.api.entity.Job;
import com.bc36gc.job.api.service.JobService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(JobController.class)
class JobControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    JobService jobService;
    @Mock
    JobService jobService1;
    @InjectMocks
    JobController jobController;

    @Test
    void load_GetMapping_Jobs() throws Exception{
        JobDto job1=new JobDto(1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km");
        JobDto job2=new JobDto(2,"software tester","hitech city","28 min ago","software apps","myntra","0-10km");
        List<JobDto> jobs=new ArrayList<>();
        jobs.add(job1);
        jobs.add(job2);
        when(jobService.getAllJobs()).thenReturn(jobs) ;
        mockMvc
                .perform(get("/jobs/"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(jobService, times(1)).getAllJobs();
    }
    @Test
    void getJobbyId() throws Exception {
        JobDto job1=new JobDto(1,"ui/ux","banjara hills","31 min ago","app developer","bmw","0-10km");
        when(jobService1.getJobbyId(1)).thenReturn(job1) ;

        JobDto job2=jobController.getJobbyId(1);
        mockMvc
                .perform(get("/jobs/1"))
                .andExpect(status().isOk())
                .andDo(print());
        Assertions.assertEquals(job2,job1);
    }

}
