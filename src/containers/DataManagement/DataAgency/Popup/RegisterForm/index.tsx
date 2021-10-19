import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row, Form } from 'antd';
import { InputField, SelectField } from 'src/components/Form';
import {
  BUSINESS_TYPE,
  BUSINESS_TYPE_DEPTH2,
} from 'src/constants/options/agency';
import useForm from './useForm';
import AreaSearch from 'src/containers/DataManagement/DataAgency/Popup/AreaSearch';

type Props = {
  onClose?: () => void;
};

const RegisterAgency: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { formik, handleCloseModal } = useForm({ t });
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <div className="agency-register">
      <Form>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.code_num')}
              field={getFieldProps('id')}
              inputProps={{
                allowClear: true,
                readOnly: true,
                disabled: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.branch_nm')}
              field={getFieldProps('name')}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
              error={errors.name}
              touched={touched.name}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.company_nm')}
              field={getFieldProps('company_name')}
              inputProps={{
                allowClear: true,
              }}
              error={errors.company_name}
              touched={touched.company_name}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.manager_name')}
              field={getFieldProps('manager_name')}
              error={errors.manager_name}
              touched={touched.manager_name}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.cell_phone_nm')}
              field={getFieldProps('manager_phone')}
              error={errors.manager_phone}
              touched={touched.manager_phone}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.business_num')}
              field={getFieldProps('business_number')}
              error={errors.business_number}
              touched={touched.business_number}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <SelectField
              label={t('data_management.data_agency.business_type')}
              field={getFieldProps('business_type_level_1')}
              optionsSelect={BUSINESS_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
              error={errors.business_type_level_1}
              touched={touched.business_type_level_1}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <SelectField
              label={t('data_management.data_agency.business_type_depth2')}
              field={getFieldProps('business_type_level_2')}
              optionsSelect={BUSINESS_TYPE_DEPTH2(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
              error={errors.business_type_level_2}
              touched={touched.business_type_level_2}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.phone_1')}
              field={getFieldProps('phone_contacts[0]')}
              error={errors.phone_contacts}
              touched={touched.phone_contacts}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.phone_2')}
              field={getFieldProps('phone_contacts[1]')}
              error={errors.phone_contacts}
              touched={touched.phone_contacts}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.phone_3')}
              field={getFieldProps('phone_contacts[2]')}
              error={errors.phone_contacts}
              touched={touched.phone_contacts}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.tax_bill')}
              field={getFieldProps('tax_bill')}
              error={errors.tax_bill}
              touched={touched.tax_bill}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.store')}
              field={getFieldProps('email')}
              error={errors.email}
              touched={touched.email}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.fax_num')}
              field={getFieldProps('fax')}
              error={errors.fax}
              touched={touched.fax}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <AreaSearch
              label={t('data_management.data_agency.address')}
              field={getFieldProps('area_id')}
              setFieldValue={setFieldValue}
              errors={errors.business_type_level_1}
              touched={touched.business_type_level_1}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.bank_name')}
              field={getFieldProps('bank_name')}
              error={errors.bank_name}
              touched={touched.bank_name}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.depositor')}
              field={getFieldProps('depositor_name')}
              error={errors.depositor_name}
              touched={touched.depositor_name}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <InputField
              label={t('data_management.data_agency.account_num')}
              field={getFieldProps('account_number')}
              error={errors.account_number}
              touched={touched.account_number}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>

        <Row gutter={24} justify={'end'}>
          <Col xs={24} sm={24} md={12} lg={12}></Col>
        </Row>
        <Row gutter={24} justify={'end'}>
          <div className="button-action">
            <Button type="primary" onClick={() => submitForm()}>
              {t('button.create')}
            </Button>
            <Button
              type="default"
              onClick={() => {
                handleCloseModal();
              }}
            >
              {t('button.cancel')}
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default RegisterAgency;
