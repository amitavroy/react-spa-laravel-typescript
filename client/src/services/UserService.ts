import UrlService from "./UrlService";
import HttpService from "./HttpService";

class UserService {
  async getCurrentUserProfile() {
    const user = localStorage.getItem('user');

    if (user && user !== '') {
      return JSON.parse(user);
    }

    const url = UrlService.currentUserProfileUrl();
    try {
      const response = await HttpService.get(url);
      return response.data;
    } catch (error) {
      console.error('Not able to fetch the user');
    }
  }
}

export default new UserService();
