import React from 'react';
import { ConfigProvider } from 'antd';
import 'moment/locale/ko';
import ko_KR from 'antd/es/locale/ko_KR';
import en_US from 'antd/es/locale/en_US';

import Notification from 'src/containers/Notification';
import Application from 'src/components/application';
import { useAppSelector } from 'src/store';

function App() {
  const lang = useAppSelector((state) => state.ui.i18n.lang);

  return (
    <ConfigProvider
      locale={lang === 'ko' ? ko_KR : en_US}
      componentSize="middle"
    >
      <Application />
      <Notification />
    </ConfigProvider>
  );
}

export default App;
