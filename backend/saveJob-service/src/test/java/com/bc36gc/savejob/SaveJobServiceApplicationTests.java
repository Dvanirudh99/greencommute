package com.bc36gc.savejob;

import com.bc36gc.savejob.api.entity.SaveJobs;
import com.bc36gc.savejob.api.exception.JobNotFoundException;
import com.bc36gc.savejob.api.repository.SaveJobsRepository;
import com.bc36gc.savejob.api.service.SaveJobsService;
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
class SaveJobServiceApplicationTests {
	@Autowired
	SaveJobsService saveJobsService;

	@MockBean
	SaveJobsRepository saveJobsRepository;

	@Test
	void findAllSaveJobs() {
		List<SaveJobs> saveJobs=new ArrayList<>();

		SaveJobs saveJob1=new SaveJobs(1,1);
		SaveJobs saveJob2=new SaveJobs(2,2);

		saveJobs.add(saveJob1);
		saveJobs.add(saveJob2);

		when(saveJobsRepository.findAll())
				.thenReturn(saveJobs);

		assertEquals(saveJobs,saveJobsService.getSaveJobs());
	}

	@Test
	void when_ValidJobId_SaveJob(){
		SaveJobs saveJob=new SaveJobs(1,1);
		saveJobsService.saveJob(saveJob);
		verify(saveJobsRepository,times(1)).save(saveJob);
	}

	@Test
	void when_InvalidJobId_SaveJob(){
		SaveJobs saveJob=new SaveJobs(1,1417);
		when(saveJobsRepository.save(saveJob))
				.thenThrow(new RuntimeException());
		assertThrows(JobNotFoundException.class, () -> saveJobsService.saveJob(saveJob));
	}

	@Test
	void when_ValidJobId_DeleteSaveJob(){
		SaveJobs saveJob1=new SaveJobs(1,1);
		when(saveJobsRepository.findByJobId(1))
				.thenReturn(saveJob1);
		saveJobsService.deleteSaveJobByJobId(1);
		verify(saveJobsRepository,times(1)).delete(saveJob1);
	}

	@Test
	void when_InvalidJobId_DeleteSaveJob(){
		when(saveJobsRepository.findByJobId(1417))
				.thenReturn(null);
		assertThrows(JobNotFoundException.class, () -> saveJobsService.deleteSaveJobByJobId(1417));
	}

}
