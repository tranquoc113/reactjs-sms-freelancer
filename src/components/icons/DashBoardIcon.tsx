import React from 'react';
import Icon from '@ant-design/icons';

const DashBoardIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
        fill="currentColor"
      />
    </svg>
  );
};

// eslint-disable-next-line react/display-name
export default (props) => <Icon component={DashBoardIcon} {...props} />;
