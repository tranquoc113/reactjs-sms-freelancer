import { TFunction } from 'i18next';
import { HomeOutlined } from '@ant-design/icons';

import { IRouter } from 'src/interfaces/route';
import Home, { PATH } from 'src/pages/home';

export default (t: TFunction): IRouter[] => [
  {
    icon: HomeOutlined,
    path: PATH,
    exact: true,
    title: t('title.home'),
    component: Home,
    requiredAuth: true,
  },
];
