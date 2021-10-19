import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
} from 'src/components/Form';
import useForm from './useForm';
import {
  USER_TYPE_SEARCH,
  USER_TTUTA_PROFILE,
  USER_ACTIVITY_STATUS,
  USER_LEVELS,
  TIME_TYPE,
  RANGE_PICKERS,
} from 'src/constants/options/userList';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, onChangeQuickPeriod, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>기본검색</span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col span={5}>
            <SelectField
              label="검색어"
              field={getFieldProps('search_type')}
              optionsSelect={USER_TYPE_SEARCH(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col span={10}>
            <InputField
              field={getFieldProps('search_text')}
              inputProps={{ prefix: <SearchOutlined />, allowClear: true }}
              labelAlign="left"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={5}>
            <SelectField
              label="ç"
              field={getFieldProps('has_ttuta_profile')}
              optionsSelect={USER_TTUTA_PROFILE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col span={5}>
            <SelectField
              label="활동상태"
              field={getFieldProps('activity_status')}
              optionsSelect={USER_ACTIVITY_STATUS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col span={5}>
            <SelectField
              label="회원등급"
              field={getFieldProps('battery')}
              optionsSelect={USER_LEVELS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => submitForm()}
            >
              검색
            </Button>
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => handleClear()}
            >
              초기화
            </Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={5}>
            <SelectField
              label="회원등급"
              field={getFieldProps('period_search')}
              optionsSelect={TIME_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col span={5}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              labelAlign="left"
              error={errors.from_date}
              touched={touched.from_date}
            />
          </Col>
          <Col span={5}>
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
          <Col>
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
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
`;

export default Search;
