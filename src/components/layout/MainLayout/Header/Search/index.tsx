import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Search: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="search">
      <Input
        bordered={false}
        prefix={<SearchOutlined />}
        placeholder={t('button.search')}
      />
    </div>
  );
};

export default Search;
