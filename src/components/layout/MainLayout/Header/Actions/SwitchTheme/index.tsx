import React from 'react';
import { Switch } from 'antd';
import useDarkMode from 'src/hooks/useDarkMode';

const SwitchLang: React.FC = () => {
  const { setTheme, isDarkMode } = useDarkMode();

  return (
    <Switch
      onChange={() => setTheme()}
      checkedChildren={'🌔'}
      unCheckedChildren={'🌤'}
      checked={isDarkMode}
    />
  );
};

export default SwitchLang;
