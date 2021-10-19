import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import useAuth from 'src/hooks/useAuth';
import { useAppDispatch } from 'src/store';
import appActions from 'src/store/ui/app';
import LocalStorage from 'src/utils/LocalStorage';

const UserProfile: React.FC = () => {
  const authInfo = useAuth();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(appActions.updateAuthInfo(null));
    LocalStorage.removeInfo();
    history.push('/login');
  };

  const overlay = (
    <Menu>
      <Menu.Item key="0" icon={<SettingOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={logout}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={overlay} placement="bottomRight">
      <span className="drop-down">
        <Avatar size={40} icon={<UserOutlined />} />
        <span className="header_text">{authInfo?.name}</span>
      </span>
    </Dropdown>
  );
};

export default UserProfile;
