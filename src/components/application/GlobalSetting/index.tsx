import React, { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const GlobalSetting: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Drawer
        maskClosable
        width={350}
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <Affix style={{ position: 'absolute', top: '50%', right: 0 }}>
        <Button
          type="primary"
          icon={<SettingOutlined spin />}
          onClick={() => setVisible(true)}
        />
      </Affix>
    </React.Fragment>
  );
};

export default GlobalSetting;
