import { STORAGE_KEY } from 'src/constants/app';

export class LocalStorage {
  private static _refresh_token =
    localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN) || null;
  private static _auth_info = JSON.parse(
    localStorage.getItem(STORAGE_KEY.AUTH_ME_INFO) || 'null',
  );
  private static _theme = localStorage.getItem(STORAGE_KEY.THEME) || 'light';
  private static _lang = localStorage.getItem(STORAGE_KEY.LANG) || 'ko';

  static get accessToken() {
    return localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN) || null;
  }

  static get refreshToken() {
    return this._refresh_token;
  }

  static get authInfo() {
    return this._auth_info;
  }

  static get theme() {
    return this._theme;
  }

  static get lang() {
    return this._lang;
  }

  static setToken(payload: any) {
    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, payload);
    localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, payload);
  }

  static saveAuthInfo(payload: any) {
    localStorage.setItem(STORAGE_KEY.AUTH_ME_INFO, JSON.stringify(payload));
  }

  static changeTheme(theme: any) {
    localStorage.setItem(STORAGE_KEY.THEME, theme);
  }

  static changeLang(lang: any) {
    localStorage.setItem(STORAGE_KEY.LANG, lang);
  }

  static removeInfo() {
    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEY.AUTH_ME_INFO);
  }
}

export default LocalStorage;
