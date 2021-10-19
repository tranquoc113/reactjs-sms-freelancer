import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import SubSider from './SubSider';
import Sider from './Sider';
import Header from './Header';
import { HEADER_HEIGHT } from 'src/constants/app';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header />
      <Layout>
        <Sider />
        <SubSider />
        <StyleContent id="main_layout">{children}</StyleContent>
      </Layout>
    </Layout>
  );
};

const StyleContent = styled(Layout)`
  padding: 5px;
  min-height: ${`calc(100vh - ${HEADER_HEIGHT}px)`};
  overflow: hidden scroll;
`;

export default MainLayout;
