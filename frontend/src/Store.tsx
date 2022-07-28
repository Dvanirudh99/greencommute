import { createContext } from "react";
import { atom } from "recoil";
import {
  DATE_POSTED,
  DISTANCE,
  EXPERIENCE,
  FilterItem,
  JOB_TYPE,
  SaveJobsType,
  TRANSPORT,
} from "./Constants";

export const UserLocationContext = createContext({
  userLocation: "",
  setUserLocation: (_value: string) => {
    /*location setter */
  },
});

const jobLocations: string[] = [];

export const JobLocationsContext = createContext({
  jobLocations: jobLocations,
  setJobLocations: (_value: string[]) => {
    /* job location setter */
  },
});

const userSkills: string[] = [];

export const UserSkillsContext = createContext({
  userSkills: userSkills,
  setUserSkills: (_value: string[]) => {
    /*skill setter */
  },
});

const savedJobs: SaveJobsType[] = [];

export const SavedJobsContext = createContext({
  savedJobs: savedJobs,
  setSavedJobs: (_value: SaveJobsType[]) => {},
});

export const distanceState = atom<FilterItem[]>({
  key: "distanceState",
  default: DISTANCE,
  dangerouslyAllowMutability: true,
});

export const datePostedState = atom<FilterItem[]>({
  key: "datePostedState",
  default: DATE_POSTED,
  dangerouslyAllowMutability: true,
});

export const jobTypeState = atom<FilterItem[]>({
  key: "jobTypeState",
  default: JOB_TYPE,
  dangerouslyAllowMutability: true,
});

export const experienceState = atom<FilterItem[]>({
  key: "experienceState",
  default: EXPERIENCE,
  dangerouslyAllowMutability: true,
});

export const transportState = atom<FilterItem[]>({
  key: "transportState",
  default: TRANSPORT,
  dangerouslyAllowMutability: true,
});

export const applyState = atom({
  key: "applyState",
  default: false,
  dangerouslyAllowMutability: true,
});
