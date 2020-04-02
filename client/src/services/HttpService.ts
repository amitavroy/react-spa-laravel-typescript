import axios from 'axios';
import CookieService from './CookieService';

class HttpService {
  async get(url) {
    const at = CookieService.get('access_token');
    const options = {
      headers: {
        'Authorization': 'Bearer ' + at
      }
    }
    try {
      return await axios.get(url, options);
    } catch (error) {
      console.error('Not able to fetch data', error);
    }
  }
}

export default new HttpService();
