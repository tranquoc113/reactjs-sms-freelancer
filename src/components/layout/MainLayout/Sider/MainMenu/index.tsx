import React from 'react';
import { Menu as AntMenu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from 'src/routes';
import { useAppDispatch } from 'src/store';
import appActions from 'src/store/ui/app';

type Props = {
  openSubDrawer?: () => void;
};

const Menu: React.FC<Props> = ({ openSubDrawer }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const getSelectedKey = () => {
    const [, path] = location.pathname.split('/');
    const key = `/${path}`;

    dispatch(appActions.updateSelectedKey(key));

    return key;
  };

  return (
    <AntMenu selectedKeys={[getSelectedKey()]} theme="light" mode="inline">
      {routes(t).map((route, i) => {
        if (route.icon) {
          const Icon = route.icon as React.FC<any>;
          const path = route.path as string;

          return (
            <AntMenu.Item key={path} icon={<Icon />} onClick={openSubDrawer}>
              <Link to={path}>{route.title}</Link>
            </AntMenu.Item>
          );
        }
      })}
    </AntMenu>
  );
};

export default Menu;
