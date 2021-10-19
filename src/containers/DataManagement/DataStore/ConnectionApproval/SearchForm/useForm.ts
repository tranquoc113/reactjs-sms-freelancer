import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';

import useQueryUrl from 'src/hooks/useQueryUrl';
import * as Yup from 'yup';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  const { t } = useTranslation();

  const defaultValue: SearchParams.DataStoreConnectionApproval = {
    business_name: '',
    business_number: '',
    to_date: '',
    from_date: '',
  };

  const validationSchema = Yup.object().shape({
    from_date: Yup.date().nullable(true),
    to_date: Yup.date()
      .nullable(true)
      .when('from_date', (from_date, schema) => {
        if (!from_date) {
          return;
        }
        return schema.min(from_date, t('validated.from_to_date'));
      }),
  });

  const formik = useFormik<SearchParams.DataStoreConnectionApproval>({
    initialValues: {
      ...defaultValue,
      ...query,
    },
    validationSchema,
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
