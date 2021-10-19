import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import Auth, { PATH } from 'src/pages/auth';

export default (t: TFunction): IRouter[] => [
  {
    path: PATH.LOGIN_PATH,
    exact: true,
    requiredAuth: false,
    restricted: true,
    component: Auth.Login,
  },
];
