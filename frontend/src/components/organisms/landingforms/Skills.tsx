import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import * as React from "react";
import { messages } from "../../../Constants";
import { UserSkillsContext } from "../../../Store";
import Chip from "../../molecules/chip/Chip";
import { SkillsContext } from "../../pages/landingpage/LandingPage";
import { chipFormStyles, commonFormStyles } from "./JobLocation";

const Skills = () => {
  const { userSkills, setUserSkills } = React.useContext(UserSkillsContext);
  const { skills } = React.useContext(SkillsContext);
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    selectedSkills: string[]
  ) => {
    setUserSkills(selectedSkills);
  };
  const commonClasses = commonFormStyles();
  const classes = chipFormStyles();
  return (
    <Box className={classes.chipForm} data-testid="skills-form">
      <Typography variant="subtitle1">{messages.SKILL_LABEL}</Typography>
      <Box className={classes.chipFormInput}>
        <Autocomplete
          multiple
          id="tags-filled"
          options={skills.map((option) => option.skillName)}
          freeSolo
          value={userSkills}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                handleDelete={getTagProps({ index }).onDelete}
                variant="defaultChip"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          onChange={handleChange}
          disableClearable
          renderInput={(params) => (
            <TextField
              className={`${commonClasses.formInput} ${classes.formInput}`}
              variant="outlined"
              placeholder={userSkills.length === 0 ? "Enter your skills" : ""}
              {...params}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Skills;
