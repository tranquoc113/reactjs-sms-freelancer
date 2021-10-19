import { AxiosRequestConfig } from 'axios';

export const HEADER_HEIGHT = 84;
export const SIDER_WIDTH = 64;
export const SUB_SIDER_WIDTH = 200;

export const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_HOUR = 'YYYY-MM-DD HH:mm:ss';
export const HOUR_FORMAT = 'HH:mm';

const API_PREFIX = '/v1';

export const config: AxiosRequestConfig = {
  baseURL:
    process.env.REACT_APP_BASE_API_URL + API_PREFIX || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export const STORAGE_KEY = {
  ACCESS_TOKEN: 'SMS_access_token',
  REFRESH_TOKEN: 'SMS_refresh_token',
  AUTH_ME_INFO: 'SMS_me_info',
  THEME: 'SMS_theme',
  LANG: 'SMS_lang',
};

export const PER = {
  DEFAULT: 10,
  USER: 10,
};
