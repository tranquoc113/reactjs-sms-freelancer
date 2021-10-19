import React from 'react';
import { Button, Col, Divider, Form, Row, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { DatePickerField, InputField, SelectField } from 'src/components/Form';
import useForm from './useForm';
import { LIST_REGION } from 'src/constants/options/dataStore';
import { DATE_TIME_FORMAT } from 'src/constants/app';

type Props = {
  onClose?: () => void;
};

const StoreForm: React.FC<Props> = () => {
  const { t } = useTranslation();
  const { formik } = useForm();
  const { getFieldProps, setFieldValue, errors, touched, submitForm } = formik;

  console.log(touched);
  return (
    <Form>
      <Row gutter={24}>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.no')}
            field={getFieldProps('id')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.no'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.id}
            touched={touched.id}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.region')}
            field={getFieldProps('region')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.region}
            touched={touched.region}
            selectProps={{
              placeholder: t('data_management.data_store.region'),
            }}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.code_number')}
            field={getFieldProps('codeNumber')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.code_number'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.codeNumber}
            touched={touched.codeNumber}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.store_group')}
            field={getFieldProps('storeGroup')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.storeGroup}
            touched={touched.storeGroup}
            selectProps={{
              placeholder: t('data_management.data_store.store_group'),
            }}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.column.salesperson_group')}
            field={getFieldProps('salespersonGroup')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.salespersonGroup}
            touched={touched.salespersonGroup}
            selectProps={{
              placeholder: t(
                'data_management.data_store.column.salesperson_group',
              ),
            }}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.business_name')}
            field={getFieldProps('businessName')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.businessName}
            touched={touched.businessName}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.ceo_name')}
            field={getFieldProps('ceoName')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.ceoName}
            touched={touched.ceoName}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.business_number')}
            field={getFieldProps('businessNumber')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.businessNumber}
            touched={touched.businessNumber}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.column.business_type')}
            field={getFieldProps('businessType')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.businessType}
            touched={touched.businessType}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.column.business_type_depth2')}
            field={getFieldProps('businessTypeDepth2')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.businessTypeDepth2}
            touched={touched.businessTypeDepth2}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.contact1')}
            field={getFieldProps('contact1')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contact1}
            touched={touched.contact1}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.contact2')}
            field={getFieldProps('contact2')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contact2}
            touched={touched.contact2}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.contact3')}
            field={getFieldProps('contact3')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contact3}
            touched={touched.contact3}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.email')}
            field={getFieldProps('email')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.email}
            touched={touched.email}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.tax_bill')}
            field={getFieldProps('taxBill')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.taxBill}
            touched={touched.taxBill}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.fax_number')}
            field={getFieldProps('faxNumber')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.faxNumber}
            touched={touched.faxNumber}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.store_address')}
            field={getFieldProps('storeAddress')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.storeAddress}
            touched={touched.storeAddress}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.bank_name')}
            field={getFieldProps('bankName')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.bankName}
            touched={touched.bankName}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.column.depositor')}
            field={getFieldProps('depositor')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.depositor}
            touched={touched.depositor}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.account_number')}
            field={getFieldProps('accountNumber')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.accountNumber}
            touched={touched.accountNumber}
          />
        </Col>
        <Col span={12}>
          <DatePickerField
            label={t('data_management.data_store.from_date')}
            format={DATE_TIME_FORMAT}
            setFieldValue={setFieldValue}
            field={getFieldProps('fromDate')}
            labelAlign="left"
            error={errors.from_date}
            touched={touched.from_date}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          />
        </Col>
        <Col span={12}>
          <DatePickerField
            label={t('data_management.data_store.to_date')}
            format={DATE_TIME_FORMAT}
            setFieldValue={setFieldValue}
            field={getFieldProps('toDate')}
            labelAlign="left"
            error={errors.to_date}
            touched={touched.to_date}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          />
        </Col>
        <Col span={12}>
          <SelectField
            label={t('data_management.data_store.unit_price')}
            field={getFieldProps('unitPrice')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.unitPrice}
            touched={touched.unitPrice}
          />
        </Col>
        <Col span={12}>
          <InputField
            label={t('data_management.data_store.application_date')}
            field={getFieldProps('applicationDate')}
            inputProps={{
              allowClear: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.applicationDate}
            touched={touched.applicationDate}
          />
        </Col>
      </Row>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => submitForm()}>
          OK
        </Button>
        <Button onClick={() => formik.resetForm()}>Clear</Button>
      </Space>
    </Form>
  );
};

export default StoreForm;
