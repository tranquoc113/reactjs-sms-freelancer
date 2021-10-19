import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { SelectField, InputField } from 'src/components/Form';
import useForm from './useForm';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup, {
  TYPE,
} from 'src/containers/DataManagement/DataStore/RegisterModify/Popup';
import AreaSearch from 'src/containers/DataManagement/DataStore/RegisterModify/Popup/AreaSearch';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear, resultStoreGroup } = useForm();
  const { handleSetTypePopup, RegisterForm } = usePopup();
  const { getFieldProps, setFieldValue, submitForm } = formik;
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
            <AreaSearch
              label={t('data_management.data_store.region')}
              field={getFieldProps('area_id')}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 9, md: 9, lg: 9 }}
              wrapperCol={{ xs: 15, md: 15, lg: 15 }}
              labelAlign={'left'}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('data_management.data_store.store_group')}
              field={getFieldProps('store_group')}
              optionsSelect={resultStoreGroup}
              setFieldValue={setFieldValue}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
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
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_store.email')}
              field={getFieldProps('email')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.data_store.email'),
              }}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_store.store_name')}
              field={getFieldProps('store_name')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.data_store.store_name'),
              }}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_store.ceo_name')}
              field={getFieldProps('ceo_name')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.data_store.ceo_name'),
              }}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24} justify="end">
          <div className="button-action">
            <GlobalModal
              modalProps={{
                title: t('data_management.data_store.title_new_store'),
                width: 950,
                footer: null,
              }}
              content={({ onClose }) => <RegisterForm onClose={onClose} />}
            >
              <Button
                type="default"
                style={{ width: '100%' }}
                onClick={() => handleSetTypePopup(TYPE.REGISTER, null)}
              >
                {t('data_management.data_store.add_new_store')}
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
  button {
    margin-bottom: 24px;
  }
`;

export default Search;
