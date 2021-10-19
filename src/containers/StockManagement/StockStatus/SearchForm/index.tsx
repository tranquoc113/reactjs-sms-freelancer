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
  CheckboxGroupField,
} from 'src/components/Form';
import {
  STOCK_STATUS_TYPE,
  DEVICE_STATUS,
  GROUP_STORE,
  RANGE_PICKERS,
  LIST_STORE,
} from 'src/constants/options/stockStatus';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, onChangeQuickPeriod, handleClear, onChangeDeviceStatus } =
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
            <InputField
              field={getFieldProps('store_nm')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.store_nm'),
              }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.status.type')}
              field={getFieldProps('type')}
              optionsSelect={STOCK_STATUS_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.status.group')}
              field={getFieldProps('group_store')}
              optionsSelect={GROUP_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              field={getFieldProps('store')}
              optionsSelect={LIST_STORE(t)}
              setFieldValue={setFieldValue}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={2}>
            <Button type="primary" onClick={() => {}}>
              {t('button.search')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <InputField
              field={getFieldProps('processor_nm')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.processor_nm'),
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('stock_management.status.serial_number')}
              field={getFieldProps('serial_number')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.status.serial_number'),
              }}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_from_date')}
              error={errors.from_date}
              touched={touched.from_date}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('modified_to_date')}
              error={errors.to_date}
              touched={touched.to_date}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              label={t('stock_management.status.release_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              labelAlign="left"
              error={errors.from_date}
              touched={touched.from_date}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              labelAlign="left"
              error={errors.to_date}
              touched={touched.to_date}
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
              label={t('stock_management.status.device_status')}
              labelAlign="left"
              field={getFieldProps('device_status')}
              optionsSelect={DEVICE_STATUS(t)}
              onChange={onChangeDeviceStatus}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
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
          </Col>
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
