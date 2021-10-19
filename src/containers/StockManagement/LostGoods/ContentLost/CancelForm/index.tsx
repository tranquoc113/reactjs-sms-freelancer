import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { DatePickerField, TextAreaField } from 'src/components/Form';

import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik } = useForm();
  const { getFieldProps, setFieldValue, errors, touched } = formik;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.register_shipment.register_form')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              label={t('stock_management.lost.processing_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('processing_date')}
              labelAlign="left"
              error={errors.processing_date}
              touched={touched.processing_date}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <TextAreaField
              label={t('stock_management.lost.memo')}
              field={getFieldProps('memo')}
              labelAlign="left"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              style={{ height: '40px' }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Row gutter={24} justify="end">
              <div className="button-action">
                <Button type="primary" style={{ width: '100%' }}>
                  {t('button.complete_lost')}
                </Button>
                <Button type="default" style={{ width: '100%' }}>
                  {t('button.cancel_lost')}
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
  button {
    margin-bottom: 24px;
  }
`;

export default Search;
