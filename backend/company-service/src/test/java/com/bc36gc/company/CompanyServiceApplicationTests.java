package com.bc36gc.company;

import com.bc36gc.company.entity.Company;
import com.bc36gc.company.repository.CompanyRepository;
import com.bc36gc.company.service.CompanyService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;



@SpringBootTest(classes = CompanyServiceApplication.class)
class CompanyServiceApplicationTests {
	@Autowired
    CompanyService companyService;
	@MockBean
    CompanyRepository companyRepository;

	@Test
	void getAllCompanytest(){
		Company company1 = new Company(1 ,1 , "myntra") ;
		Company company2 = new Company(2 ,1 , "bmw") ;
		List<Company> companies=new ArrayList<>();
		companies.add(company1);
		companies.add(company2);
		when(companyRepository.findAll()).thenReturn(companies) ;
		List<Company> allJobs =companyService.getCompany();
		assertThat(allJobs).hasSize(2);
		assertThat(companies.get(0).getCompanyName()).isEqualTo(company1.getCompanyName());
		assertThat(companies.get(1).getLocationId()).isEqualTo(company2.getLocationId());
	}


	@Test
	void getCompanyById(){

		Optional<Company> company= Optional.of(new Company(1 ,1 , "myntra"));
		when(companyRepository.findById(1)).thenReturn(company);
		Optional<Company> company2=companyService.getCompanyById(1);
		Assertions.assertEquals(company2,company);
	}

	@Test
	void getCompanyEntity() {
		Company job = new Company(1 ,1 , "myntra") ;
		job.setCompanyId(1);
		job.setLocationId(1);
		job.setCompanyName("myntra");
		Assertions.assertEquals(1,job.getCompanyId());
		Assertions.assertEquals(1,job.getLocationId());
		Assertions.assertEquals("myntra",job.getCompanyName());
	}
	@Test
	void findByIdException() {
		Company job = new Company(1 ,1 , "myntra");
		when(companyRepository.findById(2)).thenReturn(Optional.of(job));
		assertThrows(RuntimeException.class, ()-> companyService.getCompanyById(57));
	}


}
