import React from 'react';
import { Col, Row } from 'antd';

import SearchForm from './SearchForm';
import RegisterForm from './RegisterForm';
import Table from './Table';
import { useAppSelector } from 'src/store';

const MainShipment: React.FC = () => {
  const props = useAppSelector((state) => state.domain.RegisterShipment);

  return (
    <Row gutter={24}>
      <Col span={24}>
        <SearchForm />
      </Col>
      <Col span={24}>
        <RegisterForm />
      </Col>
      <Col span={24}>
        <Table {...props} />
      </Col>
    </Row>
  );
};

export default MainShipment;
