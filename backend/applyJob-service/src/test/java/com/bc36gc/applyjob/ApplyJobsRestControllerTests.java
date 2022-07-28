package com.bc36gc.applyjob;

import com.bc36gc.applyjob.api.controller.ApplyJobRestController;
import com.bc36gc.applyjob.api.entity.ApplyJob;
import com.bc36gc.applyjob.api.service.ApplyJobService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ApplyJobRestController.class)
class ApplyJobsRestControllerTests {

  @Autowired MockMvc mockMvc;

  @MockBean ApplyJobService applyJobService;

  @Test
  void load_getAllAppliedJobs() throws Exception {
    List<ApplyJob> appliedJobs = new ArrayList<>();
    appliedJobs.add(new ApplyJob(1, 1));

    when(applyJobService.getAllAppliedJobs()).thenReturn(appliedJobs);

    mockMvc.perform(get("/apply-jobs/")).andExpect(status().isOk()).andDo(print());

    verify(applyJobService, times(1)).getAllAppliedJobs();
  }

  @Test
  void load_PostMapping_ApplyJob() throws Exception {
    int jobId = 1;
    ApplyJob applyJob = new ApplyJob();
    applyJob.setJobId(jobId);

    mockMvc.perform(post("/apply-jobs/" + jobId)).andDo(print());

    verify(applyJobService, times(1)).applyJob(applyJob);
  }

  @Test
  void load_DeleteMapping_SaveJobs() throws Exception {
    int jobId = 1;
    ApplyJob applyJob = new ApplyJob();
    applyJob.setJobId(jobId);

    mockMvc.perform(delete("/apply-jobs/" + jobId)).andDo(print());

    verify(applyJobService, times(1)).deleteAppliedJobByJobId(jobId);
  }
}
