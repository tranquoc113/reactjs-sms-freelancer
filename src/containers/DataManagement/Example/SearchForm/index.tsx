import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { SelectField, InputField } from 'src/components/Form';
import { LIST_REGION } from 'src/constants/options/dataStore';
import useForm from './useForm';
import StoreForm from '../StoreForm';
import GlobalModal from 'src/components/common/GlobalModal';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm();
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
          <Col xs={24} xl={18}>
            <Row gutter={[24, 0]}>
              <Col xs={24} md={12} xl={8}>
                <SelectField
                  label={t('data_management.data_store.region')}
                  field={getFieldProps('region')}
                  optionsSelect={LIST_REGION(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <SelectField
                  label={t('data_management.data_store.store_group')}
                  field={getFieldProps('store_group')}
                  optionsSelect={LIST_REGION(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <InputField
                  label={t('data_management.data_store.business_number')}
                  field={getFieldProps('business_number')}
                  inputProps={{
                    allowClear: true,
                    placeholder: t(
                      'data_management.data_store.business_number',
                    ),
                  }}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <InputField
                  label={t('data_management.data_store.email')}
                  field={getFieldProps('email')}
                  inputProps={{
                    allowClear: true,
                    placeholder: t('data_management.data_store.email'),
                  }}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <InputField
                  label={t('data_management.data_store.store_name')}
                  field={getFieldProps('store_name')}
                  inputProps={{
                    allowClear: true,
                    placeholder: t('data_management.data_store.store_name'),
                  }}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <InputField
                  label={t('data_management.data_store.ceo_name')}
                  field={getFieldProps('ceo_name')}
                  inputProps={{
                    allowClear: true,
                    placeholder: t('data_management.data_store.ceo_name'),
                  }}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={6}>
            <Row gutter={24}>
              <Col xs={12} md={4} xl={12}>
                <Button block type="primary" onClick={() => submitForm()}>
                  {t('button.search')}
                </Button>
              </Col>
              <Col xs={12} md={4} xl={12}>
                <Button block type="default" onClick={() => handleClear()}>
                  {t('button.clear')}
                </Button>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col>
                <GlobalModal
                  modalProps={{
                    title: 'Add',
                    width: 700,
                    footer: null,
                  }}
                  content={({ onClose }) => <StoreForm onClose={onClose} />}
                >
                  <Button block type="primary">
                    {t('data_management.data_store.add_new_store')}
                  </Button>
                </GlobalModal>
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
  button {
    margin-bottom: 24px;
  }
`;

export default Search;
