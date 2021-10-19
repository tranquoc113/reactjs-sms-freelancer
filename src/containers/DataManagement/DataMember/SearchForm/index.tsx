import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { SelectField, InputField } from 'src/components/Form';
import useForm from './useForm';
import GlobalModal from 'src/components/common/GlobalModal';
import MemberForm from '../Popup/MemberForm';
import AddMemberToGroup from '../Popup/AddMemberToGroup';
import { MEMBER_TYPE, LIST_REGION } from 'src/constants/options/dataMember';

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
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('data_management.members.member_group')}
              field={getFieldProps('member_group')}
              optionsSelect={MEMBER_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('data_management.data_member.member_name')}
              field={getFieldProps('member_name')}
              inputProps={{
                allowClear: true,
                placeholder: t('data_management.members.member_name'),
              }}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('data_management.members.store_name')}
              field={getFieldProps('store_name')}
              optionsSelect={LIST_REGION(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 4, lg: 6 }}
              wrapperCol={{ xs: 24, md: 20, lg: 18 }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24} justify="end">
          <div className="button-action">
            <GlobalModal
              modalProps={{
                title: t('data_management.data_store.title_detail_store'),
                width: 700,
                footer: null,
              }}
              content={({ onClose }) => <MemberForm onClose={onClose} />}
            >
              <Button type="primary" style={{ width: '100%' }}>
                {t('button.add_member')}
              </Button>
            </GlobalModal>
            <GlobalModal
              modalProps={{
                title: t('data_management.data_store.title_detail_store'),
                width: 700,
                footer: null,
              }}
              content={({ onClose }) => <AddMemberToGroup onClose={onClose} />}
            >
              <Button type="primary" style={{ width: '100%' }}>
                {t('button.add_member_to_member_group')}
              </Button>
            </GlobalModal>
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
