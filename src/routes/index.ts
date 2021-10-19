import { TFunction } from 'i18next';
import { IRouter } from 'src/interfaces/route';

import error from './error';
import home from './home';
import stockManagement from './stockManagement';
import user from './user';
import dataManagement from './dataManagement';
import auth from './auth';
import policySettlement from './policySettlement';

export default (t: TFunction): IRouter[] => [
  ...error(t),
  ...auth(t),
  ...home(t),
  ...stockManagement(t),
  ...user(t),
  ...dataManagement(t),
  ...policySettlement(t),
];
