import React from 'react';
import { Layout } from 'antd';

import Menu from './Menu';
import { SUB_SIDER_WIDTH } from 'src/constants/app';
import { useAppSelector } from 'src/store';

const { Sider: AntSider } = Layout;

const SubSider: React.FC = () => {
  const collapsed = useAppSelector((state) => state.ui.app.collapsed);

  return (
    <AntSider
      className="sub-sider"
      width={SUB_SIDER_WIDTH}
      collapsedWidth={0}
      collapsed={collapsed}
    >
      <Menu />
    </AntSider>
  );
};

export default SubSider;
