import React from 'react';
import { Select } from 'antd';

import useLangMode from 'src/hooks/useLangMode';

const SwitchLang: React.FC = () => {
  const { lang, switchLanguage } = useLangMode();
  return (
    <Select
      style={{ width: 80 }}
      size="small"
      onChange={switchLanguage}
      value={lang}
    >
      <Select.Option value="ko">🇰🇷 KO</Select.Option>
      <Select.Option value="en">🇬🇧 EN</Select.Option>
    </Select>
  );
};

export default SwitchLang;
