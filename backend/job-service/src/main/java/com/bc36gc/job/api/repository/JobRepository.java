package com.bc36gc.job.api.repository;

import com.bc36gc.job.api.dto.JobDto;
import com.bc36gc.job.api.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job,Integer> {

    @Query(value="select job.job_id,job.role,job.address,job.time_posted,skill.skill_name,company.company_name,job.distance from job inner join skill,company where job.skill_id  =skill.skill_id  and job.company_id=company.company_id",nativeQuery = true)
    List<Object[]> findbySkillandCompanyJobs();

    @Query(value="select job.job_id,job.role,job.address,job.time_posted,skill.skill_name,company.company_name,job.distance from job  inner join skill,company where job.skill_id  =skill.skill_id  and job.company_id=company.company_id and job.job_id=?1",nativeQuery = true)
    List<Object[]> findByUserId(Integer id);
}
