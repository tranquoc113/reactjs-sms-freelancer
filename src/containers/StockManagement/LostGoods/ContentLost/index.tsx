import React from 'react';
import { Col, Row } from 'antd';

import SearchForm from './SearchForm';
import CancelForm from './CancelForm';
import Table from './Table';
import { useAppSelector } from 'src/store';

const ContentLost: React.FC = () => {
  const props = useAppSelector((state) => state.domain.lostGoods);

  return (
    <Row gutter={24}>
      <Col span={24}>
        <SearchForm />
      </Col>
      <Col span={24}>
        <CancelForm />
      </Col>
      <Col span={24}>
        <Table {...props} />
      </Col>
    </Row>
  );
};

export default ContentLost;
