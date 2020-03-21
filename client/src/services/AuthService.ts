import axios from 'axios';
import UrlService from './UrlService';

interface Credentials {
  username: string
  password: string
}

class AuthService {
  async doUserLogin(credentials: Credentials) {
    try {
      const response = await axios.post(UrlService.loginUrl(), credentials);
      return response.data;
    } catch (error) {
      console.error('Error', error.response);
      return false;
    }
  }
}

export default new AuthService();
