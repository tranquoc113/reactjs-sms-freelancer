import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import Error, { PATH } from 'src/pages/error';

export default (t: TFunction): IRouter[] => [
  {
    path: PATH.NOT_FOUND,
    exact: true,
    requiredAuth: false,
    component: Error.NotFound,
  },
  {
    path: PATH.INTERNAL_SERVER,
    exact: true,
    requiredAuth: false,
    component: Error.InternalServer,
  },
  {
    path: PATH.FORBIDDEN,
    exact: true,
    requiredAuth: false,
    component: Error.Forbidden,
  },
];
