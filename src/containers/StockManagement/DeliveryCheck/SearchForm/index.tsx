import React from 'react';
import { Card, Col, Row, Button, Collapse } from 'antd';
import {
  FilterOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';
import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
  CheckboxGroupField,
} from 'src/components/Form';
import {
  LIST_STORE,
  GROUP_STORE,
  RANGE_PICKERS,
  STATE_CLS,
} from 'src/constants/options/deliveryCheck';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear, onChangeQuickPeriod, onChangeStateCls } =
    useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;
  const { Panel } = Collapse;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.delivery_check.basic_search')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col span={24}>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <SelectField
                  label={t('stock_management.delivery_check.shipment_store')}
                  field={getFieldProps('shipment_store')}
                  optionsSelect={LIST_STORE(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ xs: 24, md: 6, lg: 6 }}
                  wrapperCol={{ xs: 24, md: 18, lg: 18 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <SelectField
                  label={t('stock_management.delivery_check.device_name')}
                  field={getFieldProps('device_name')}
                  optionsSelect={GROUP_STORE(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ xs: 24, md: 6, lg: 6 }}
                  wrapperCol={{ xs: 24, md: 18, lg: 18 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <Row gutter={24}>
                  <Col xs={24} sm={6} md={6} lg={6}>
                    <Button style={{ float: 'right' }} type={'primary'}>
                      {t('button.search')}
                    </Button>
                  </Col>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <InputField
                      field={getFieldProps('search_device')}
                      inputProps={{
                        prefix: <SearchOutlined />,
                        allowClear: true,
                        placeholder: t(
                          'stock_management.delivery_check.device_name',
                        ),
                      }}
                      labelAlign="left"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <SelectField
                  label={t('stock_management.delivery_check.device_name')}
                  field={getFieldProps('device_name_list')}
                  optionsSelect={GROUP_STORE(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ xs: 24, md: 6, lg: 6 }}
                  wrapperCol={{ xs: 24, md: 18, lg: 18 }}
                  labelAlign="left"
                  style={{ marginBottom: 5 }}
                />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Collapse
                  ghost
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                >
                  <Panel
                    header={t('stock_management.delivery_check.advanced')}
                    key="1"
                  >
                    <Row gutter={24} justify={'space-around'}>
                      <Col xs={24} sm={24} md={12} lg={8}>
                        <InputField
                          label={t(
                            'stock_management.delivery_check.processor_nm',
                          )}
                          field={getFieldProps('processor_nm')}
                          inputProps={{
                            prefix: <SearchOutlined />,
                            allowClear: true,
                            placeholder: t(
                              'stock_management.delivery_check.processor_nm',
                            ),
                          }}
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
                            placeholder: t(
                              'stock_management.delivery_check.serial_number',
                            ),
                          }}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={4}>
                        <DatePickerField
                          format={DATE_TIME_FORMAT}
                          setFieldValue={setFieldValue}
                          field={getFieldProps('modified_from_date')}
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
                  </Panel>
                </Collapse>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <DatePickerField
                  label={t('stock_management.delivery_check.delivery_date')}
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
                  onChange={onChangeQuickPeriod}
                  radioProps={{
                    optionType: 'button',
                  }}
                />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <CheckboxGroupField
                  label={t('stock_management.delivery_check.state_cls')}
                  labelAlign="left"
                  field={getFieldProps('state_cls')}
                  optionsSelect={STATE_CLS(t)}
                  onChange={onChangeStateCls}
                  labelCol={{ xs: 24, md: 6, lg: 6 }}
                  wrapperCol={{ xs: 24, md: 18, lg: 18 }}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={16}>
                <Row gutter={24} style={{ marginBottom: 10 }} justify={'end'}>
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
                      onClick={() => submitForm()}
                    >
                      {t('stock_management.delivery_check.store_registration')}
                    </Button>
                    <Button
                      type="default"
                      style={{ width: '100%' }}
                      onClick={() => handleClear()}
                    >
                      {t('stock_management.delivery_check.delete_selection')}
                    </Button>
                  </div>
                </Row>
              </Col>
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
  .ant-collapse-header {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .ant-collapse-content-box {
    padding-left: 0 !important;
    padding-right: 0 !important;
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
