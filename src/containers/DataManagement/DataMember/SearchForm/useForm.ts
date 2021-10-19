import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';

import useQueryUrl from 'src/hooks/useQueryUrl';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  // const { t } = useTranslation();

  const defaultValue: SearchParams.DataMemberSearch = {
    member_group: 'member',
    member_name: '',
    store_name: '0',
  };

  const formik = useFormik<SearchParams.DataMemberSearch>({
    initialValues: {
      ...defaultValue,
      ...query,
    },
    onSubmit(value) {
      history.push({
        search: qs.stringify({ ..._.omitBy(value, _.isEmpty), limit: 1 }),
      });
    },
    enableReinitialize: true,
  });

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  const onChangeMemberType = (checkedValue: Array<CheckboxValueType>) => {
    formik.setFieldValue('member_type', checkedValue);
  };

  return { formik, handleClear, onChangeMemberType };
};

export default useForm;
