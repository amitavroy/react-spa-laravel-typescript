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
      this.pushCurrentUserObjectToLocalStorage(response);
      return response.data;
    } catch (error) {
      console.error('Not able to fetch the user');
    }
  }
  pushCurrentUserObjectToLocalStorage(response) {
    const userObject = {
      'name': response.data.name,
      'email': response.data.email,
      'designation': response.data.designation,
      'followers': response.data.followers,
      'following': response.data.following,
      'friends': response.data.following,
    };
    localStorage.setItem('user', JSON.stringify(userObject));
  }
}

export default new UserService();
