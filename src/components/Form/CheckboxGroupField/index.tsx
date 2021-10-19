import React from 'react';
import { Form, Checkbox } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

// ______________________________________________________
//
// @ Types

type Props = {
  field: FieldInputProps<any>;
  optionsSelect: { label: string; value: number | string }[];
  label?: string;
  checkboxProps?: CheckboxGroupProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const CheckboxGroupField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    checkboxProps,
    optionsSelect,
    onChange,
    ...rest
  } = props;

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <Checkbox.Group
        {...field}
        {...checkboxProps}
        options={optionsSelect}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default CheckboxGroupField;
