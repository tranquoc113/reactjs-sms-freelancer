import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  CheckboxGroupField,
  DatePickerField,
  InputField,
  RadioGroupField,
  SelectField,
} from 'src/components/Form';
import {
  RANGE_PICKERS,
  PROCESS_TYPE,
  BARCODE,
  SHIPMENT_STORE,
} from 'src/constants/options/StockManagement/changeStatus';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, onChangeQuickPeriod, handleClear, onChangeProcessType } =
    useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <Wrapper>
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
              label={t('stock_management.change_status.barcode')}
              field={getFieldProps('barcode')}
              optionsSelect={BARCODE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              field={getFieldProps('serial_number')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.change_status.serial_number'),
              }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.change_status.shipment_store')}
              field={getFieldProps('shipment_store')}
              optionsSelect={SHIPMENT_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('stock_management.change_status.processor')}
              field={getFieldProps('processor')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.change_status.processor'),
              }}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              label={t('stock_management.change_status.process_range_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('process_from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              labelAlign="left"
              error={errors.process_from_date}
              touched={touched.process_from_date}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('process_to_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              labelAlign="left"
              error={errors.process_to_date}
              touched={touched.process_to_date}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <RadioGroupField
              field={getFieldProps('quick_period_search')}
              optionsSelect={RANGE_PICKERS(t)}
              radioProps={{
                optionType: 'button',
              }}
              onChange={onChangeQuickPeriod}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <CheckboxGroupField
              label={t('stock_management.change_status.process_type')}
              labelAlign="left"
              field={getFieldProps('process_type')}
              optionsSelect={PROCESS_TYPE(t)}
              onChange={onChangeProcessType}
              labelCol={{ xs: 24, md: 4 }}
              wrapperCol={{ xs: 24, md: 20 }}
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
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => handleClear()}
            >
              {t('stock_management.change_status.btn_cancel_status')}
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
  label.ant-radio-button-wrapper {
    margin-bottom: 10px !important;
  }
  .ant-col.ant-form-item-label.ant-form-item-label-left {
    white-space: pre-wrap !important;
    overflow: unset;
  }
`;

export default Search;
