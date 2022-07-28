package com.bc36gc.company;

import com.bc36gc.company.controller.CompanyController;
import com.bc36gc.company.entity.Company;
import com.bc36gc.company.service.CompanyService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
 class CompanyControllerTests {
    @InjectMocks
    CompanyController companyController;
    @Mock
    CompanyService companyService;

    @Test
    void getAllCompanyTest(){
        Company job1 = new Company(1 ,1 , "myntra") ;
        Company job2 = new Company(2 ,1 , "bmw") ;
        List<Company> jobs=new ArrayList<>();
        jobs.add(job1);
        jobs.add(job2);
        when(companyService.getCompany()).thenReturn(jobs) ;
        List<Company> companies =companyController.getCompany();
        assertThat(companies).hasSize(2);
        assertThat(companies.get(0).getCompanyName()).isEqualTo(job1.getCompanyName());
        assertThat(companies.get(1).getCompanyName()).isEqualTo(job2.getCompanyName());

    }

    @Test
    void getCompanyById(){
        Optional<Company> company= Optional.of(new Company(1 ,1 , "myntra"));
        when(companyService.getCompanyById(1)).thenReturn(company) ;
        Optional<Company> company2=companyController.getCompanyId(1);
        Assertions.assertEquals(company2,company);

    }




}