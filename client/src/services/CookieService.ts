import Cookie from 'universal-cookie';

const cookie = new Cookie();

class CookieService {
  get(key: string) {
    return cookie.get(key);
  }

  set(key: string, value: string, options: object) {
    cookie.set(key, value, options);
  }

  remove(key: string) {
    cookie.remove(key);
  }
}

export default new CookieService();
