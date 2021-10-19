import React from 'react';
import { Col, Row } from 'antd';

import SearchForm from './SearchForm';
import Table from './Table';
import { useAppSelector } from 'src/store';

const ShipmnetCheck: React.FC = () => {
  const props = useAppSelector((state) => state.domain.shipmentCheck);

  return (
    <Row gutter={24}>
      <Col span={24}>
        <SearchForm />
      </Col>
      <Col span={24}>
        <Table {...props} />
      </Col>
    </Row>
  );
};

export default ShipmnetCheck;
