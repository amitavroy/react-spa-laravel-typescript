import AuthService from "./../../../../services/AuthService";
import CookieService from "../../../../services/CookieService";
class Auth {
  constructor() {
    const token = CookieService.get("access_token");
    token ? (this.authenticated = true) : (this.authenticated = false);
  }

  async login(credentails, cb) {
    const user = await AuthService.doUserLogin(credentails);

    if (!user) {
      cb(false);
      return false;
    }

    localStorage.setItem("accessToken", user.access_token);
    this.authenticated = true;
    cb(true);
  }

  logout(cb) {
    CookieService.remove("access_token");
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getAccessToken() {
    return CookieService.get("access_token");
  }
}

export default new Auth();
