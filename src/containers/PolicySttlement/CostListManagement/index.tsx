import React from 'react';
import { Space } from 'antd';
import { useAppSelector } from 'src/store';

import ManageForm from './ManageForm';
import Table from './Table';

const Container: React.FC = () => {
  const props = useAppSelector((state) => state.domain.costList);
  return (
    <Space size={24} direction="vertical" style={{ width: '100%' }}>
      <ManageForm />
      {props.showList && <Table {...props} />}
    </Space>
  );
};

export default Container;
