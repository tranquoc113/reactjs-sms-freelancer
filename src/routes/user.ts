import { UserOutlined } from '@ant-design/icons';
import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import User, { PATH } from 'src/pages/user';

const PARENT_PART = '/user';

export default (t: TFunction): IRouter[] => [
  {
    path: PARENT_PART,
    icon: UserOutlined,
    exact: true,
    title: t('title.user_management'),
    redirect: true,
    redirectPath: PATH.LIST,
  },
  {
    path: PATH.LIST,
    parent: PARENT_PART,
    exact: true,
    title: t('title.user_list'),
    component: User.List,
    requiredAuth: true,
  },
  {
    path: PATH.DETAIL,
    exact: true,
    title: t('title.user_detail'),
    component: User.Detail,
    requiredAuth: true,
  },
  {
    path: PATH.SETTING,
    parent: PARENT_PART,
    exact: true,
    title: t('title.user_setting'),
    component: User.Setting,
    requiredAuth: true,
  },
];
