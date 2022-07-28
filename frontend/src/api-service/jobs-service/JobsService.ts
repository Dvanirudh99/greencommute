import UrlService from "../url-service/UrlService";

const JobsService = {
  getJobs: async () => {
    try {
      const jobsData = await UrlService.get("/jobs/");
      return jobsData.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default JobsService;
