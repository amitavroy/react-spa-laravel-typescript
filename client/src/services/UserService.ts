import UrlService from "./UrlService";
import HttpService from "./HttpService";

class UserService {
  user = null;

  async getCurrentUserProfile() {
    const url = UrlService.currentUserProfileUrl();
    try {
      const response = await HttpService.get(url);
      this.user = response.data;
      return response.data;
    } catch (error) {
      console.error("Not able to fetch the user");
    }
  }
}

export default new UserService();
