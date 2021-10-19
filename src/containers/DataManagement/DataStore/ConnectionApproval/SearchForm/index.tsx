import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { DatePickerField, InputField } from 'src/components/Form';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm();
  const { getFieldProps, setFieldValue, errors, touched, submitForm } = formik;
  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.status.basic_search')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_store.business_name')}
              field={getFieldProps('business_name')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.data_store.business_name'),
              }}
              labelCol={{ xs: 24, md: 4, lg: 8 }}
              wrapperCol={{ xs: 24, md: 20, lg: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_store.business_number')}
              field={getFieldProps('business_number')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.data_store.business_number'),
              }}
              labelCol={{ xs: 24, md: 4, lg: 8 }}
              wrapperCol={{ xs: 24, md: 20, lg: 16 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              label={t('data_management.data_store.request_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              labelAlign="left"
              error={errors.from_date}
              touched={touched.from_date}
              labelCol={{ xs: 24, md: 4, lg: 8 }}
              wrapperCol={{ xs: 24, md: 20, lg: 16 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_date')}
              labelAlign="left"
              error={errors.to_date}
              touched={touched.to_date}
            />
          </Col>
        </Row>
        <Row gutter={24} justify="end">
          <div className="button-action">
            <Button type="primary" onClick={() => submitForm()}>
              {t('button.search')}
            </Button>
            <Button type="default" onClick={() => handleClear()}>
              {t('button.clear')}
            </Button>
          </div>
        </Row>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
  button {
    margin-bottom: 24px;
  }
`;

export default Search;
