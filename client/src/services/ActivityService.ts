import UrlService from "./UrlService";
import HttpService from "./HttpService";

class ActivityService {
  async getCurrentUserActivities() {
    const url = UrlService.getCurrentUserAcitiviesUrl();
    try {
      const response = await HttpService.get(url);
      return response.data;
    } catch (error) {
      console.error("Not able to fetch the user");
    }
  }
}

export default new ActivityService();
