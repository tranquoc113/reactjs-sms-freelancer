import React from 'react';
import { Space } from 'antd';
import { useAppSelector } from 'src/store';
// import { useTranslation } from 'react-i18next';

import SearchForm from './SearchForm';
import Table from './Table';

const Container: React.FC = () => {
  // const { t } = useTranslation();
  const props = useAppSelector((state) => state.domain.datastore);

  return (
    <Space size={24} direction="vertical" style={{ width: '100%' }}>
      <SearchForm />
      <Table {...props} />
    </Space>
  );
};

export default Container;
