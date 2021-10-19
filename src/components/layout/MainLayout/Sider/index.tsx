import React from 'react';
import { Layout } from 'antd';

import MainMenu from './MainMenu';
import { useAppSelector } from 'src/store';
import { SIDER_WIDTH } from 'src/constants/app';

const { Sider: AntSider } = Layout;

const Sider: React.FC = () => {
  const collapsed = useAppSelector((state) => state.ui.app.collapsed);

  return (
    <AntSider
      className="sider"
      collapsed={true}
      collapsedWidth={collapsed ? 0 : SIDER_WIDTH}
    >
      <MainMenu />
    </AntSider>
  );
};

export default Sider;
