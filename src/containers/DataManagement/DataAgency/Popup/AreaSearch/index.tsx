import React from 'react';
import { useTranslation } from 'react-i18next';
import useForm from './useForm';
import { Spin } from 'antd';
import { SelectField } from 'src/components/Form';
import { FormItemProps } from 'antd/lib/form';

type Props = {
  label?: string;
  field?: any;
  setFieldValue?: any;
  errors?: any;
  touched?: any;
} & Omit<FormItemProps, 'children'>;

const AreaSearch: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { handleSearch, areas_list, status } = useForm({ t });
  const { field, setFieldValue, errors, touched, ...rest } = props;

  const notFoundContent =
    status == 'pending' ? <Spin size="small" /> : '주소가 유효하지 않습니다.';

  return (
    <SelectField
      field={field}
      optionsSelect={areas_list(t)}
      setFieldValue={setFieldValue}
      selectProps={{
        showSearch: true,
        showArrow: false,
        filterOption: false,
        defaultActiveFirstOption: false,
      }}
      error={errors}
      touched={touched}
      callbackOnSearch={handleSearch}
      notFoundContent={notFoundContent}
      {...rest}
    />
  );
};

export default AreaSearch;
