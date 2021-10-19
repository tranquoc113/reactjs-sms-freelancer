import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';

import { useAppSelector } from 'src/store';
import useQueryUrl from 'src/hooks/useQueryUrl';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  // const { t } = useTranslation();
  const { storeGroup } = useAppSelector((state) => state.domain.datastore);

  const defaultValue: SearchParams.DataStore = {
    region: '',
    store_group: '',
    business_number: '',
    email: '',
    store_name: '',
    ceo_name: '',
  };

  let resultStoreGroup: any = [];
  storeGroup?.data?.forEach((item) => {
    resultStoreGroup.push({
      value: item.id,
      label: item.name,
    });
  });

  const formik = useFormik<SearchParams.DataStore>({
    initialValues: {
      ...defaultValue,
      ...query,
    },
    onSubmit(value) {
      history.push({
        search: qs.stringify({ ..._.omitBy(value, _.isEmpty), limit: 10 }),
      });
    },
    enableReinitialize: true,
  });

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  return { formik, handleClear, resultStoreGroup };
};

export default useForm;
