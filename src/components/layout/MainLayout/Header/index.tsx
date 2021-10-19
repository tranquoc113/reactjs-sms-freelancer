import React, { useState } from 'react';
import { Layout, Drawer, Button, Divider } from 'antd';
import styled, { css } from 'styled-components';

import { HEADER_HEIGHT, SIDER_WIDTH, SUB_SIDER_WIDTH } from 'src/constants/app';
import { useAppSelector } from 'src/store';
import Search from './Search';
import Actions from './Actions';
import { MenuFoldOutlined } from '@ant-design/icons';
import SubMenu from 'src/components/layout/MainLayout/SubSider/Menu';
import MainMenu from 'src/components/layout/MainLayout/Sider/MainMenu';

const Header: React.FC = () => {
  const collapsed = useAppSelector((state) => state.ui.app.collapsed);
  const selectedKey = useAppSelector((state) => state.ui.app.selectedKey);
  const [visible, setVisible] = useState<boolean>(false);
  const [subVisible, setSubVisible] = useState<boolean>(false);

  const shouldOpenSub = subVisible && selectedKey !== '/';

  return (
    <StyledHeader collapsed={collapsed}>
      <div className="logo" />
      <div className="actions">
        <Search />
        <Actions />
        <Divider type="vertical" />
        {collapsed && (
          <Button
            icon={<MenuFoldOutlined />}
            onClick={() => setVisible(true)}
          />
        )}
      </div>
      <Drawer
        maskClosable
        placement="right"
        visible={visible}
        width={shouldOpenSub ? 140 : 64}
        bodyStyle={{ padding: 0, width: 64 }}
        headerStyle={{ display: 'none' }}
        onClose={() => setVisible(false)}
      >
        <div className="ant-layout-sider ant-layout-sider-dark ant-layout-sider-collapsed sider mobile_sider">
          <div className="ant-layout-sider-children">
            <MainMenu openSubDrawer={() => setSubVisible(true)} />
          </div>
        </div>

        <Drawer
          headerStyle={{ display: 'none' }}
          visible={shouldOpenSub}
          onClose={() => setSubVisible(false)}
          bodyStyle={{ padding: 0 }}
          className="sub-sider-mobile"
        >
          <SubMenu
            onItemClick={() => {
              setVisible(false);
              setSubVisible(false);
            }}
          />
        </Drawer>
      </Drawer>
    </StyledHeader>
  );
};

const StyledHeader = styled(Layout.Header)<{ collapsed?: boolean }>`
  height: ${HEADER_HEIGHT}px !important;
  display: flex;
  .logo {
    width: ${({ collapsed }) =>
      SIDER_WIDTH + (collapsed ? 0 : SUB_SIDER_WIDTH)}px;
    height: ${HEADER_HEIGHT}px;
    z-index: 2;
  }
  .actions {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    .search {
      flex: 1;
    }
    align-items: center;
    ${({ collapsed }) =>
      collapsed
        ? css`
            width: calc(100vw - ${SIDER_WIDTH}px);
          `
        : css`
            width: calc(100vw - ${SIDER_WIDTH + SUB_SIDER_WIDTH}px);
          `}
  }
  .drop-down {
    cursor: pointer;
    .header_text {
      margin-left: 8px;
    }
  }
`;

export default Header;
