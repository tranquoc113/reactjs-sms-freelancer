import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const Notify: React.FC = () => {
  return (
    <Badge count={10}>
      <BellOutlined style={{ fontSize: 24, top: 4, position: 'relative' }} />
    </Badge>
  );
};

export default Notify;
