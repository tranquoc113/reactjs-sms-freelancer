import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { SelectField } from 'src/components/Form';
import { BUSINESS_TYPE_DEPTH2 } from 'src/constants/options/agency';
import useForm from './useForm';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm } = formik;

  return (
    <Card
      title={
        <React.Fragment>
          <FilterOutlined />
          <span style={{ marginLeft: 8 }}>{t('title.basic_search')}</span>
        </React.Fragment>
      }
    >
      <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <SelectField
            label={t('data_management.data_member.member_group')}
            field={getFieldProps('member_group')}
            optionsSelect={BUSINESS_TYPE_DEPTH2(t)}
            setFieldValue={setFieldValue}
            labelCol={{ xs: 24, md: 6, lg: 8 }}
            wrapperCol={{ xs: 24, md: 18, lg: 16 }}
            labelAlign="left"
          />
        </Col>
      </Row>
      <Row gutter={24} justify={'end'}>
        <div className="button-action">
          <Button
            type="primary"
            style={{ width: '100%' }}
            onClick={() => submitForm()}
          >
            {t('button.search')}
          </Button>
          <Button
            type="default"
            style={{ width: '100%' }}
            onClick={() => handleClear()}
          >
            {t('button.clear')}
          </Button>
        </div>
      </Row>
    </Card>
  );
};

export default Search;
