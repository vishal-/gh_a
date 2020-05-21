import CookieService from "./cookie.service";
import { SELECTED_PAGE } from "../config/pages.config";
import { APP_COOKIE } from "../config/app.config";

class AppService {
  defaults = {
    cookieVal: {
      selected_page: SELECTED_PAGE
    }
  };

  getAppCookie = () => {
    let kukee = CookieService.getCookie(APP_COOKIE);

    if (!kukee) {
      kukee = this.defaults.cookieVal;
      CookieService.setCookie(APP_COOKIE, kukee);
    }

    return kukee;
  };

  getSelectedPage = () => {
    return this.getAppCookie().selected_page;
  };

  updateSelectedPage = selected => {
    const kukee = { ...CookieService.getCookie(APP_COOKIE) };

    kukee.selected_page = selected;
    CookieService.setCookie(APP_COOKIE, kukee);
  };
}

export default AppService;
