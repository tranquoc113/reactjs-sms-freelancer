import React from 'react';
import { Space } from 'antd';
import { useAppSelector } from 'src/store';

import SearchForm from 'src/containers/DataManagement/Example/SearchForm';
import Table from 'src/containers/DataManagement/Example/Table';

const Container: React.FC = () => {
  const props = useAppSelector((state) => state.domain.user);

  return (
    <Space size={24} direction="vertical" style={{ width: '100%' }}>
      <SearchForm />
      <Table {...props} />
    </Space>
  );
};

export default Container;
