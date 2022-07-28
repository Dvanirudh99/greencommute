import UrlService from "../url-service/UrlService";

const ApplyJobsService = {
  getAppliedJobs: async () => {
    try {
      const appliedJobsData = await UrlService.get("/apply-jobs/");
      return appliedJobsData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postApplyJobs: async (jobId: number) => {
    try {
      await UrlService.post("/apply-jobs/" + jobId);
    } catch (error) {
      console.log(error);
    }
  },
};

export default ApplyJobsService;
