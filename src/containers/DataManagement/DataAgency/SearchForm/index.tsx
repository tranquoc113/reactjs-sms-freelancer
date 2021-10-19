import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { SelectField, InputField } from 'src/components/Form';
import {
  BUSINESS_TYPE,
  BUSINESS_TYPE_DEPTH2,
} from 'src/constants/options/agency';
import useForm from './useForm';
import usePopup, { TYPE } from 'src/containers/DataManagement/DataAgency/Popup';
import GlobalModal from 'src/components/common/GlobalModal';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm();
  const { handleSetTypePopup, RegisterAgencyComponent } = usePopup();
  const { getFieldProps, setFieldValue, submitForm } = formik;

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
              label={t('data_management.data_agency.business_type')}
              field={getFieldProps('business_type_level_1')}
              optionsSelect={BUSINESS_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('data_management.data_agency.business_type_depth2')}
              field={getFieldProps('business_type_level_2')}
              optionsSelect={BUSINESS_TYPE_DEPTH2(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_agency.company_nm')}
              field={getFieldProps('company_name')}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_agency.branch_nm')}
              field={getFieldProps('name')}
              inputProps={{
                allowClear: true,
              }}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24} justify={'end'}>
          <div className="button-action">
            <GlobalModal
              modalProps={{
                title: t('data_management.data_agency.agency_register'),
                width: 950,
                footer: null,
              }}
              content={({ onClose }) => (
                <RegisterAgencyComponent onClose={onClose} />
              )}
            >
              <Button
                block
                type="default"
                style={{ width: '100%' }}
                onClick={() => handleSetTypePopup(TYPE.REGISTER, null)}
              >
                {t('data_management.data_agency.button_register')}
              </Button>
            </GlobalModal>
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
  .ant-col.ant-form-item-label.ant-form-item-label-left {
    white-space: pre-wrap !important;
    overflow: unset;
  }
`;

export default Search;
