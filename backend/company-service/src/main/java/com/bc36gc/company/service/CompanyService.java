package com.bc36gc.company.service;


import com.bc36gc.company.entity.Company;
import java.util.List;
import java.util.Optional;


public interface CompanyService {
    public List<Company> getCompany();
    Optional<Company> getCompanyById(Integer id);

}
