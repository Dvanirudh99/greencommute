import React from "react";
import DashBoard from "../public/images/icons/dashboard.svg";
import Save from "../public/images/icons/save.svg";
import Work from "../public/images/icons/work.svg";
import Test from "../public/images/icons/test.svg";
import Settings from "../public/images/icons/settings.svg";
import News from "../public/images/icons/news.svg";
import Help from "../public/images/icons/help.svg";
import Contact from "../public/images/icons/contact.svg";
import Done from "../public/images/icons/done.svg";
import Notifications from "../public/images/icons/notifications.svg";
import Search from "../public/images/icons/search.svg";
import Message from "../public/images/icons/message.svg";
import Bus from "../public/images/icons/bus.svg";
import Car from "../public/images/icons/car.svg";
import Train from "../public/images/icons/train.svg";
import Bike from "../public/images/icons/bike.svg";
import More from "../public/images/icons/more.svg";
import Filter from "../public/images/icons/filter.svg";
import Back from "../public/images/icons/back.svg";
import MapPin from "../public/images/icons/mapPin.svg";
import Location from "../public/images/icons/location.svg";
import Tick from "../public/images/icons/tick.svg";
import Current from "../public/images/icons/current.svg";
import Swap from "../public/images/icons/swap.svg";
import Arrow from "../public/images/icons/arrow.svg";
import Rupee from "../public/images/icons/rupee.svg";
import Close from "../public/images/icons/close.svg";
import Upload from "../public/images/icons/upload.svg";
import Bmw from "../public/images/logos/bmw.svg";
import Hp from "../public/images/logos/hp.svg";
import Instagram from "../public/images/logos/instagram.svg";
import Myntra from "../public/images/logos/myntra.svg";
import Ola from "../public/images/logos/ola.svg";
import Rapido from "../public/images/logos/rapido.svg";
import Twitter from "../public/images/logos/twitter.svg";
import Uber from "../public/images/logos/uber.svg";
import Wipro from "../public/images/logos/wipro.svg";
import Avatar from "../public/images/logos/avatar.svg";
import GreenCommute from "../public/images/logos/greenCommute.svg";
import Mapview from "../public/images/illustrations/mapview.svg";
import Jobs from "../public/images/illustrations/jobs.svg";
import WorkIllustration from "../public/images/illustrations/work.svg";
import Stay from "../public/images/illustrations/stay.svg";
import { IconPropsType } from "./components/atoms/icon/Icon";
import { LogosType as LogoType } from "./components/atoms/logo/Logo";

interface IconsType {
  [key: string]: any;
}

export const Icons: IconsType = {
  save: <Save />,
  dashboard: <DashBoard />,
  work: <Work />,
  test: <Test />,
  settings: <Settings />,
  news: <News />,
  help: <Help />,
  contact: <Contact />,
  done: <Done />,
  notifications: <Notifications />,
  search: <Search />,
  message: <Message />,
  bus: <Bus />,
  car: <Car />,
  train: <Train />,
  bike: <Bike />,
  more: <More />,
  filter: <Filter />,
  back: <Back />,
  arrow: <Arrow />,
  mapPin: <MapPin />,
  location: <Location />,
  tick: <Tick />,
  current: <Current />,
  swap: <Swap />,
  rupee: <Rupee />,
  close: <Close />,
  upload: <Upload />,
};

interface LogosType extends IconsType {}

export const Logos: LogosType = {
  bmw: <Bmw />,
  hp: <Hp />,
  instagram: <Instagram />,
  myntra: <Myntra />,
  ola: <Ola />,
  rapido: <Rapido />,
  twitter: <Twitter />,
  uber: <Uber />,
  wipro: <Wipro />,
  avatar: <Avatar />,
  greenCommute: <GreenCommute />,
};

export const Illustrations: IconsType = {
  jobs: <Jobs />,
  mapview: <Mapview />,
  stay: <Stay />,
  work: <WorkIllustration />,
};

interface MessagesType {
  [key: string]: string;
}

export const messages: MessagesType = {
  FILE_UPLOAD: "File Upload",
  CLICK_TO_UPLOAD: "Click Here to Upload Files",
  FILE_UPLOAD_SUCCESS: "Your Resume got Uploaded Successfully !",
  COMMUTE_ROUTES: "Commute routes available :",
  DESCRIPTION: "Description",
  JOB_DETAIL:
    "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",

  ABOUT_TITLE: "About the Company",

  ABOUT_COMPANY:
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch,InVision, or Experience Design including the core Adobe Creative Suite products.",

  SKILL_DETAILS:
    "Excellent written and oral communication and presentation skills",

  METRO_ROUTE_INFO: "Catch a blue line metro towards Raidurg",

  ROUTES_LABEL: "Common Routes",
  DISTANCE: "Distance",
  DATE_POSTED: "Date Posted",
  GREEN_COMMUTE: "Green Commute",
  JOB_TYPE: "Job Type",
  EXPERIENCE_LEVEL: "Experience Level",
  TRANSPORT: "Transport",
  CLEAR_ALL: "Clear All",
  APPLY: "Apply",
  JOB_LIST: "Job List",
  JOB_SEARCH: "Based on your search",
  PEOPLE_INFO: "More than 2000 people are using",
  USER_LOCATION_LABEL: "Where do you stay?",
  JOB_LOCATION_LABEL: "Where do you want to work?",
  SKILL_LABEL: "What do you want to do?",
  LOCATION_INFO: "Enter Location to know Time Air Quality Index (AQI)",
  AQI_INFO: "Real Time Air Quality Index(AQI) in this location",
  SKILL_INFO: "Enter your Skills to know how many jobs are in this Location",
  SEE_MORE: "SEE MORE",
  GREEN_COMMUTE_ROUTES: "Green Commute Routes",
  FIND_JOBS: "Find Jobs",
  RECOMMENDED: "Recommended for you",
  BASED_SKILL: "Based on your profile, skills and search history.",
  SAVED_JOBS: "Saved Jobs",
};

export interface SideMenuItem {
  iconName: IconPropsType["name"];
  label: string;
}

export const SIDE_MENU_ITEMS: SideMenuItem[] = [
  {
    iconName: "dashboard",
    label: "Dashboard",
  },
  {
    iconName: "work",
    label: "Find Jobs",
  },
  {
    iconName: "save",
    label: "Saved Jobs",
  },
  {
    iconName: "test",
    label: "Practice Tests",
  },
  {
    iconName: "news",
    label: "News &  Events",
  },
  {
    iconName: "help",
    label: "Need Help ?",
  },
  {
    iconName: "contact",
    label: "Contact Us",
  },
  {
    iconName: "settings",
    label: "Settings",
  },
];

interface ModeOfTravel {
  mode: string;
  iconName: IconPropsType["name"];
}

export const MODES_OF_TRAVEL: ModeOfTravel[] = [
  {
    mode: "bike",
    iconName: "bike",
  },
  {
    mode: "bus",
    iconName: "bus",
  },
  {
    mode: "cab",
    iconName: "car",
  },
  {
    mode: "train",
    iconName: "train",
  },
];

interface CabProvider {
  id: number;
  logo: LogosType["name"];
  title: string;
  price: string;
}

export const CAB_PROVIDERS: CabProvider[] = [
  {
    id: 1,
    title: "Ola",
    logo: "ola",
    price: "45",
  },
  {
    id: 2,
    title: "Uber",
    logo: "uber",
    price: "45",
  },
  {
    id: 3,
    title: "rapido",
    logo: "rapido",
    price: "45",
  },
];

export const SKILLS_LIST = ["UX Designer", "UI Designer", "Graphic Designer"];
export const LOCATION_LIST = ["Hyderabad", "Mumbai"];
export interface FilterItem {
  label: string;
  checked: boolean;
}
export const DISTANCE: FilterItem[] = [
  {
    label: "0-10km",
    checked: true,
  },
  {
    label: "11-20km",
    checked: false,
  },
  {
    label: "21-30km",
    checked: false,
  },
  {
    label: "31-40km",
    checked: false,
  },
];
export const DATE_POSTED: FilterItem[] = [
  {
    label: "Past 24 hours",
    checked: true,
  },
  {
    label: "Past Week",
    checked: false,
  },
  {
    label: "Past Month",
    checked: false,
  },
  {
    label: "Anytime",
    checked: false,
  },
];
export const JOB_TYPE: FilterItem[] = [
  {
    label: "Full time",
    checked: true,
  },
  {
    label: "Internship",
    checked: false,
  },
  {
    label: "Contract",
    checked: false,
  },
  {
    label: "Remote",
    checked: false,
  },
];
export const EXPERIENCE: FilterItem[] = [
  {
    label: "Fresher",
    checked: true,
  },
  {
    label: "Mid-level",
    checked: false,
  },
  {
    label: "Director",
    checked: false,
  },
  {
    label: "Executive",
    checked: false,
  },
];
export const TRANSPORT: FilterItem[] = [
  {
    label: "Metro",
    checked: true,
  },
  {
    label: "Bus",
    checked: true,
  },
  {
    label: "Car pooling",
    checked: true,
  },
  {
    label: "Motor cycle",
    checked: true,
  },
];
export const GREEN_COMMUTE_OPTION: FilterItem[] = [
  {
    label: "Yes",
    checked: true,
  },
  {
    label: "No",
    checked: false,
  },
];

export const CHIP_LIST: string[] = [
  "10-20kms",
  "Past 24 hours",
  "Fulltime",
  "Fresher",
  "GreenCommuteRoutes",
];

export interface JobLocationsType {
  id: number;
  address: string;
  aqi: number;
}

export const JOB_LOCATIONS: JobLocationsType[] = [
  {
    id: 1,
    address: "hyderabad",
    aqi: 894,
  },
  {
    id: 2,
    address: "mumbai",
    aqi: 953,
  },
];

export interface SkillJobsType {
  skillId: number;
  skillName: string;
}

export const SKILLS_JOBS: SkillJobsType[] = [
  {
    skillId: 1,
    skillName: "UI/UX Designer",
  },
  {
    skillId: 2,
    skillName: "Graphic Designer",
  },
];

export const STEPS: string[] = ["Your Location", "Job location", "Your Skills"];
export interface FilteredJobs {
  id: number;
  role: string;
  company: LogoType["name"];
  address: string;
  history: string;
  skill: string;
  distance: string;
}
export const USER_CURRENT_LOCATION: string = "East Marredpally, Secunderabad";

export interface SaveJobsType {
  id: number;
  jobId: number;
}
