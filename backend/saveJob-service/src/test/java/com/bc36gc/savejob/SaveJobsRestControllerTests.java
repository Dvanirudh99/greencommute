package com.bc36gc.savejob;

import com.bc36gc.savejob.api.controller.SaveJobsRestController;
import com.bc36gc.savejob.api.entity.SaveJobs;
import com.bc36gc.savejob.api.service.SaveJobsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(SaveJobsRestController.class)
class SaveJobsRestControllerTests {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    SaveJobsService saveJobsService;

    @Test
    void load_GetMapping_SaveJobs() throws Exception{
        List<SaveJobs> saveJobs=new ArrayList<>();
        saveJobs.add(new SaveJobs(1,1));

        when(saveJobsService.getSaveJobs()).thenReturn(saveJobs);

        mockMvc
                .perform(get("/save-jobs/"))
                .andExpect(status().isOk())
                .andDo(print());

        verify(saveJobsService, times(1)).getSaveJobs();
    }

    @Test
    void load_PostMapping_SaveJobs() throws Exception{
        int jobId=1;
        SaveJobs saveJob=new SaveJobs();
        saveJob.setJobId(jobId);

        mockMvc.perform(post("/save-jobs/"+jobId))
                .andDo(print());

        verify(saveJobsService, times(1)).saveJob(saveJob);
    }

    @Test
    void load_DeleteMapping_SaveJobs() throws Exception{
        int jobId=1;
        SaveJobs saveJob=new SaveJobs();
        saveJob.setJobId(jobId);

        mockMvc.perform(delete("/save-jobs/"+jobId))
                .andDo(print());

        verify(saveJobsService, times(1)).deleteSaveJobByJobId(jobId);
    }
}
