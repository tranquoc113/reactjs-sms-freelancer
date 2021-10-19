import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { SelectField, InputField, DatePickerField } from 'src/components/Form';
import { SERIAL_NUMBER } from 'src/constants/options/stockStatus';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.register_shipment.basic_search')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.register_shipment.agency')}
              field={getFieldProps('agency')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <SelectField
              field={getFieldProps('serial_number')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <SelectField
              field={getFieldProps('device_name')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={3}>
            <Button
              type="default"
              style={{ width: '100%' }}
              onClick={() => handleClear()}
            >
              {t('button.search')}
            </Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.register_shipment.device_name')}
              field={getFieldProps('processor_nm')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <InputField
              field={getFieldProps('serial_no')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.processor_nm'),
              }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <InputField
              field={getFieldProps('serial_no')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.processor_nm'),
              }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_from_date')}
              labelAlign="left"
              error={errors.from_date}
              touched={touched.from_date}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_to_date')}
              labelAlign="left"
              error={errors.to_date}
              touched={touched.to_date}
            />
          </Col>
        </Row>
        <Row gutter={24} justify="end">
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
