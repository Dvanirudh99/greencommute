package com.bc36gc.skill.api.controller;

import com.bc36gc.skill.api.entity.Skill;
import com.bc36gc.skill.api.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/")
    public List<Skill> getAllSkills(){
        return skillService.getAllSkills();
    }

    @GetMapping(value = "/{id}")
    public Optional<Skill> getSkillbyId(@PathVariable("id") Integer id) {
        return skillService.getSkillbyId(id);
    }
}
