import { useFormik } from 'formik';
import { RadioChangeEvent } from 'antd';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';
import * as Yup from 'yup';

import useQueryUrl from 'src/hooks/useQueryUrl';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  const { t } = useTranslation();

  const defaultValue: SearchParams.LostGoods = {
    processing_date: '',
    memo: '',
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

  const formik = useFormik<SearchParams.LostGoods>({
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

  const onChangeShipmentType = (e: RadioChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue('shipment_type', value);
  };

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  const onChangeDeviceStatus = (checkedValue: Array<CheckboxValueType>) => {
    formik.setFieldValue('device_status', checkedValue);
  };

  return { formik, onChangeShipmentType, handleClear, onChangeDeviceStatus };
};

export default useForm;
