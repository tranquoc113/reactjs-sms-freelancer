import React from 'react';
import { Button, Grid, Menu, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

// import Notify from './Notify';
import SwitchTheme from './SwitchTheme';
import SwitchLang from './SwitchLang';
import UserProfile from './UserProfile';
import { CustomDropdown } from 'src/components/common';

const Actions: React.FC = () => {
  const screen = Grid.useBreakpoint();

  const actions: React.ComponentType[] = [
    // Notify,
    SwitchTheme,
    SwitchLang,
    UserProfile,
  ];

  const overlay = (
    <Menu style={{ padding: 8 }}>
      <Space>
        {actions.map((Component, key) => (
          <Menu.Item key={key}>
            <Component />
          </Menu.Item>
        ))}
      </Space>
    </Menu>
  );

  const isMobile = !screen.md;

  return isMobile ? (
    <CustomDropdown menu={overlay}>
      <span className="drop-down">
        <Button icon={<SettingOutlined />} />
      </span>
    </CustomDropdown>
  ) : (
    <Space size="large">
      {actions.map((Component, key) => (
        <Component key={key} />
      ))}
    </Space>
  );
};

export default Actions;
