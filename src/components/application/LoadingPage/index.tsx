import React from 'react';
import { Spin, SpinProps } from 'antd';
import styled from 'styled-components';

const LoadingPage: React.FC<SpinProps> = (props) => {
  const { size = 'large' } = props;

  if (size === 'large') {
    return (
      <StyledLarge>
        <Spin size="large" spinning={true} {...props} />
      </StyledLarge>
    );
  }

  if (size === 'small') {
    return (
      <StyleSmall>
        <Spin size="small" spinning={true} {...props} />
      </StyleSmall>
    );
  }

  return null;
};

const StyledLarge = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  opacity: 1;
`;

const StyleSmall = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  opacity: 1;
`;

export default LoadingPage;
