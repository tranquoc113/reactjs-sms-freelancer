import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Space, Divider, Descriptions, Col, Card } from 'antd';
import appActions from 'src/store/ui/app';
import { useAppDispatch } from 'src/store';
import useForm from './useForm';
import { SelectField } from 'src/components/Form';
import { PLAN } from 'src/constants/options/policySettlement';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AddPlan: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { formik } = useForm();
  const { getFieldProps, setFieldValue } = formik;

  const handleCloseModal = () => {
    dispatch(appActions.updateVisibleModal(false));
  };

  return (
    <div>
      <Descriptions bordered>
        <Descriptions.Item label={t('policy_settlement.agency')} span={3}>
          {t('policy_settlement.active_agency', { value: 1 })}
        </Descriptions.Item>
        <Descriptions.Item label={t('policy_settlement.version')} span={3}>
          {t('policy_settlement.active_agency')}
        </Descriptions.Item>
        <Descriptions.Item
          label={t('policy_settlement.group', { value: '' })}
          span={3}
        >
          {t('policy_settlement.group', { value: 1 })}
        </Descriptions.Item>
      </Descriptions>
      <Divider />

      <Row gutter={15}>
        <Col span={12}>
          <Row>
            <SelectField
              style={{ width: '100%' }}
              label={t('policy_settlement.agency')}
              field={getFieldProps('plan')}
              optionsSelect={PLAN(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 146 }}
              labelAlign="left"
            />
          </Row>
          <Row justify="end">
            {' '}
            <Button
              disabled={!formik.getFieldProps('plan').value}
              type="primary"
            >
              {t('policy_settlement.addition')}
            </Button>
          </Row>
        </Col>
        <Col span={12}>
          <Card>
            <Wrapper>
              {PLAN(t).map((x) => (
                <p key={x.value}>
                  {x.label} <DeleteOutlined className="icon-color" />
                </p>
              ))}
            </Wrapper>
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row justify="end" style={{ marginTop: '10px' }}>
        <Space>
          <Button type="default" style={{ width: '100%' }}>
            {t('button.save')}
          </Button>
          <Button
            type="default"
            style={{ width: '100%' }}
            onClick={handleCloseModal}
          >
            {t('button.cancel')}
          </Button>
        </Space>
      </Row>
    </div>
  );
};

const Wrapper = styled.div`
  .icon-color {
    color: red;
    cursor: pointer;
  }
`;

export default AddPlan;
