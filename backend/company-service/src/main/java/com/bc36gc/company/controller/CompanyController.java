package com.bc36gc.company.controller;


import com.bc36gc.company.entity.Company;
import com.bc36gc.company.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/company")
    public class CompanyController{
        @Autowired
        private CompanyService companyService ;

        @GetMapping("/")
        public List<Company> getCompany() {
        return companyService.getCompany();
    }

    @GetMapping("/{companyId}")
    public Optional<Company> getCompanyId(@PathVariable("companyId") Integer companyId){

        return companyService.getCompanyById(companyId);
    }


}
