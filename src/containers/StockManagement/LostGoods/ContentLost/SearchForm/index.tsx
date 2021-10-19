import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
} from 'src/components/Form';
import { SERIAL_NUMBER } from 'src/constants/options/stockStatus';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';
import { SHIPMENT_TYPE } from 'src/constants/options/registerShipment';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear, onChangeLostType } = useForm();
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
            <SelectField
              field={getFieldProps('serial_number')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={7}>
            <SelectField
              label={t('stock_management.lost.name_of_holder')}
              field={getFieldProps('name_of_holder')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={7}>
            <InputField
              label={t('stock_management.lost.processor')}
              field={getFieldProps('processor')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.processor_nm'),
              }}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={4}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_from_date')}
              labelAlign="left"
              error={errors.modified_from_date}
              touched={touched.modified_from_date}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_to_date')}
              labelAlign="left"
              error={errors.modified_to_date}
              touched={touched.modified_to_date}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <RadioGroupField
              field={getFieldProps('lost_type')}
              optionsSelect={SHIPMENT_TYPE(t)}
              onChange={onChangeLostType}
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
