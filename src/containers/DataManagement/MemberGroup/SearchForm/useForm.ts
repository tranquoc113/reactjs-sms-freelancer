import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';
import _ from 'lodash';

import useQueryUrl from 'src/hooks/useQueryUrl';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();

  const defaultValue: SearchParams.MemberGroup = {
    member_group: '',
  };
  const formik = useFormik<SearchParams.MemberGroup>({
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
