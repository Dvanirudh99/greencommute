package com.bc36gc.Skill;

import com.bc36gc.skill.SkillServiceApplication;
import com.bc36gc.skill.api.entity.Skill;
import com.bc36gc.skill.api.repository.SkillRepository;
import com.bc36gc.skill.api.service.SkillService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = SkillServiceApplication.class)
class SkillServiceTests {
    @InjectMocks
    SkillService skillService;
    @Mock
    SkillRepository skillRepository;

    @Test
    void getAllSkillsTest(){
        Skill skill=new Skill(1,"App developer");
        Skill skill1=new Skill(2,"UI designer");
        List<Skill> skills=new ArrayList<>();
        skills.add(skill);
        skills.add(skill1);
        when(skillRepository.findAll()).thenReturn(skills) ;
        List<Skill> allSkills = skillService.getAllSkills();
        assertThat(allSkills).hasSize(2);
        assertThat(allSkills.get(0).getSkillName()).isEqualTo(skill.getSkillName());
        assertThat(allSkills.get(1).getSkillName()).isEqualTo(skill1.getSkillName());

    }

    @Test
    void getSkillbyIdTest(){
        Optional<Skill> skill= Optional.of(new Skill(1,  "ux designer"));
        when(skillRepository.findById(1)).thenReturn(skill) ;
        Optional<Skill> skill1= skillService.getSkillbyId(1);
        Assertions.assertEquals(skill1,skill);

    }



}

