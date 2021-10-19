import React from 'react';
import { Form, AutoComplete } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  options?: {
    value: number | string;
    label?: string | React.ReactElement;
    options?: React.ReactElement[];
    disabled?: boolean;
  }[];
  setFieldValue: (field: string, value: any) => void;
  autoCompleteProps?: AutoCompleteProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  render?: React.ReactElement;
  callbackOnChange?: (e) => void;
  callbackOnSearch?: (e) => void;
  callbackOnSelect?: (e) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const AutoCompleteField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    options,
    setFieldValue,
    autoCompleteProps,
    render,
    callbackOnChange,
    callbackOnSearch,
    callbackOnSelect,
    ...rest
  } = props;

  const onChange = (e) => {
    setFieldValue(field.name, e);
    callbackOnChange && callbackOnChange(e);
  };

  const onSearch = (e) => {
    callbackOnSearch && callbackOnSearch(e);
  };

  const onSelect = (e) => {
    setFieldValue(field.name, e);
    callbackOnSelect && callbackOnSelect(e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <AutoComplete
        {...field}
        options={options}
        onChange={onChange}
        onSearch={onSearch}
        onSelect={onSelect}
        {...autoCompleteProps}
      >
        {render}
      </AutoComplete>
    </Form.Item>
  );
};

export default AutoCompleteField;
