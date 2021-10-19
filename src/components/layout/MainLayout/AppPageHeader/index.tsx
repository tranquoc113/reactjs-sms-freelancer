import React from 'react';
import { PageHeader, PageHeaderProps } from 'antd';
import { useHistory } from 'react-router';

const AppPageHeader: React.FC<PageHeaderProps> = (props) => {
  const history = useHistory();

  return (
    <PageHeader
      style={{ padding: 0, marginBottom: 24 }}
      onBack={() => history.goBack()}
      {...props}
    />
  );
};

export default AppPageHeader;
