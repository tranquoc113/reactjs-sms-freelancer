import React from 'react';
import { Card } from 'antd';
import { Pie, PieConfig } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      type: '요청',
      value: 27,
    },
    {
      type: '요청회신',
      value: 25,
    },
    {
      type: '확인',
      value: 18,
    },
    {
      type: '반려',
      value: 15,
    },
  ];

  const config: PieConfig = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    pieStyle(ref) {
      switch (ref.type) {
        case '요청':
          return { fill: '#C8A2C8' };
        case '요청회신':
          return { fill: '#D2ACD2' };
        case '확인':
          return { fill: '#BE98BE' };
        case '반려':
          return { fill: '#785278' };
      }
    },
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  return (
    <Card>
      <Pie {...config} />
    </Card>
  );
};

export default DemoPie;
