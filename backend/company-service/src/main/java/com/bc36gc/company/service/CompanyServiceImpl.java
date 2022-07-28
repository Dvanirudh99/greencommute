package com.bc36gc.company.service;


import com.bc36gc.company.entity.Company;
import com.bc36gc.company.exception.CompanyNotFoundException;
import com.bc36gc.company.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> getCompany() {
        return companyRepository.findAll();
    }

    @Override
    public Optional<Company> getCompanyById(Integer id) {

        Optional<Company> result = companyRepository.findById(id);

        if (result.isEmpty()) {
            throw new CompanyNotFoundException("Did not find company id - " +id);
        }

        return result;
    }
}