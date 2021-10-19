import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';

import useQueryUrl from 'src/hooks/useQueryUrl';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  // const { t } = useTranslation();

  const defaultValue: SearchParams.DataStore = {
    region: '0',
    store_group: '0',
    business_number: '',
    email: '',
    store_name: '',
    ceo_name: '',
  };

  const formik = useFormik<SearchParams.DataStore>({
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

  return { formik, handleClear };
};

export default useForm;
