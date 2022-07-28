import UrlService from "../url-service/UrlService";

const AppService = {
  getLocations: async () => {
    try {
      const locationsData = await UrlService.get("/location/");
      return locationsData.data;
    } catch (error) {
      console.log(error);
    }
  },
  getSkills: async () => {
    try {
      const skillsData = await UrlService.get("/skills/");
      return skillsData.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AppService;
