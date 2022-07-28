package com.bc36gc.skill.api.service;
import com.bc36gc.skill.api.entity.Skill;
import com.bc36gc.skill.api.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class SkillService {
  @Autowired
    private SkillRepository skillRepository;

    public  List<Skill> getAllSkills(){
        return skillRepository.findAll();
    }

    public Optional<Skill> getSkillbyId(Integer id) {
        return skillRepository.findById(id);
    }
}

