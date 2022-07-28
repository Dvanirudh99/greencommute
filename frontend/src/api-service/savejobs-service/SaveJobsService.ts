import UrlService from "../url-service/UrlService";

import axios from "axios";

const SaveJobsService = {
  getSaveJobs: async () => {
    try {
      const saveJobsData = await UrlService.get("/save-jobs/");
      return saveJobsData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postSaveJobs: async (jobId: number) => {
    try {
      await UrlService.post("/save-jobs/" + jobId);
    } catch (error) {
      console.log(error);
    }
  },
  deleteSaveJobs: async (jobId: number) => {
    try {
      await UrlService.delete("/save-jobs/" + jobId);
    } catch (error) {
      console.log(error);
    }
  },
};

export default SaveJobsService;
