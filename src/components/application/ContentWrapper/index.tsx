import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { HEADER_HEIGHT } from 'src/constants/app';
import { useAppSelector } from 'src/store';

type Props = {};

const ContentWrapper: React.FC<Props> = ({ children }) => {
  const appLoading = useAppSelector((state) => state.ui.app.loading);

  return (
    <Wrapper>
      {appLoading ? (
        <SpinWrapper>
          <Spin spinning={true} size="default" />
        </SpinWrapper>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: ${`calc(100vh - ${HEADER_HEIGHT}px)`};
  width: 100%;
  justify-content: start;
  display: flex;
  flex-direction: column;
`;

const SpinWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContentWrapper;
