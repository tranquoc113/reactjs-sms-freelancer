import React from 'react';
import { Menu as AntMenu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'src/store';
import routes from 'src/routes';

type Props = {
  onItemClick?: () => void;
};

const Menu: React.FC<Props> = ({ onItemClick }) => {
  const selectedKey = useAppSelector((state) => state.ui.app.selectedKey);
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <AntMenu selectedKeys={[location.pathname]} theme="light" mode="inline">
      {routes(t)
        .filter((item) => item.parent === selectedKey && !item.subMenu)
        .map((item, i) => {
          return (
            <>
              {item.isSubmenu ? (
                <AntMenu.SubMenu
                  key={item.path as React.Key}
                  title={item.title}
                >
                  {routes(t)
                    .filter((itemSub) => item.path === itemSub.subMenu)
                    .map((itemSub, index) => {
                      return (
                        <AntMenu.Item
                          key={itemSub.path as React.Key}
                          onClick={onItemClick}
                        >
                          <Link to={itemSub.path as string}>
                            {itemSub.title}
                          </Link>
                        </AntMenu.Item>
                      );
                    })}
                </AntMenu.SubMenu>
              ) : (
                <AntMenu.Item
                  key={item.path as React.Key}
                  onClick={onItemClick}
                >
                  <Link to={item.path as string}>{item.title}</Link>
                </AntMenu.Item>
              )}
            </>
          );
        })}
    </AntMenu>
  );
};

export default Menu;
