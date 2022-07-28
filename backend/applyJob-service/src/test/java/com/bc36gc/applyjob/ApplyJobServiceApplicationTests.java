package com.bc36gc.applyjob;

import com.bc36gc.applyjob.api.entity.ApplyJob;
import com.bc36gc.applyjob.api.exception.JobNotFoundException;
import com.bc36gc.applyjob.api.repository.ApplyJobRepository;
import com.bc36gc.applyjob.api.service.ApplyJobService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class ApplyJobServiceApplicationTests {

  @Autowired ApplyJobService applyJobService;

  @MockBean ApplyJobRepository applyJobRepository;

  @Test
  void findAllAppliedJobs() {
    List<ApplyJob> appliedJobs = new ArrayList<>();
    ApplyJob job1 = new ApplyJob(1, 1);
    ApplyJob job2 = new ApplyJob(2, 2);

    appliedJobs.add(job1);
    appliedJobs.add(job2);

    when(applyJobRepository.findAll()).thenReturn(appliedJobs);

    assertEquals(appliedJobs, applyJobService.getAllAppliedJobs());
  }

  @Test
  void when_JobIdIsValid_ApplyJob() throws JobNotFoundException {
    ApplyJob job = new ApplyJob(1, 1);
    applyJobService.applyJob(job);
    verify(applyJobRepository, times(1)).save(job);
  }

  @Test
  void when_InvalidJobId_ApplyJob(){
    ApplyJob applyJob=new ApplyJob(1,1417);
    when(applyJobRepository.save(applyJob))
            .thenThrow(new RuntimeException());
    assertThrows(JobNotFoundException.class, () -> applyJobService.applyJob(applyJob));
  }
  @Test
  void when_JobIdIsValid_DeleteAppliedJob() throws JobNotFoundException {
    ApplyJob job = new ApplyJob(1, 1);
    when(applyJobRepository.findByJobId(1)).thenReturn(job);
    applyJobService.deleteAppliedJobByJobId(1);
    verify(applyJobRepository, times(1)).delete(job);
  }
  @Test
  void when_JobIdIsNotApplied_DeleteAppliedJob() throws JobNotFoundException {
    ApplyJob job = new ApplyJob(1, 1);
    when(applyJobRepository.findByJobId(1)).thenReturn(job);
    assertThrows(JobNotFoundException.class, () -> applyJobService.deleteAppliedJobByJobId(2121));
  }
}
