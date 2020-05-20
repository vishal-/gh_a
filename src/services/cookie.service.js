class CookieService {
  static setCookie = (name, content) => {
    content = content instanceof Object ? JSON.stringify(content) : content;
    document.cookie = `${name}=${encodeURIComponent(content)}; SameSite=Lax`;
  };

  static getCookie = name => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );

    let response = null;

    if (match && match[2]) {
      try {
        response = JSON.parse(decodeURIComponent(match[2]));
      } catch (e) {
        response = decodeURIComponent(match[2]);
      }
    }

    return response;
  };

  static removeCookie = name => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  };
}

export default CookieService;
