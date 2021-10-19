import { useFormik } from 'formik';
import { RadioChangeEvent } from 'antd';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import _ from 'lodash';
import * as Yup from 'yup';

import moment from 'src/libs/moment';
import { DATE_TIME_FORMAT } from 'src/constants/app';
import useQueryUrl from 'src/hooks/useQueryUrl';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const useForm = () => {
  const history = useHistory();
  const query = useQueryUrl();
  const { t } = useTranslation();

  const defaultValue: SearchParams.LostGoodsSearch = {
    serial_no: '',
    serial_number: '',
    name_of_holder: '',
    processor: '',
    modified_from_date: '',
    modified_to_date: '',
    lost_type: '',
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

  const formik = useFormik<SearchParams.LostGoodsSearch>({
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

  const onChangeQuickPeriod = (e: RadioChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue('quick_period_search', value);
    formik.setFieldValue('to_date', moment().format(DATE_TIME_FORMAT));
    const setFromDate = formik.setFieldValue.bind(null, 'from_date');

    switch (value) {
      case 'today':
        setFromDate(moment().format(DATE_TIME_FORMAT));
        break;
      case 'yesterday':
        setFromDate(moment().subtract(1, 'day').format(DATE_TIME_FORMAT));
        break;
      case 'week':
        setFromDate(moment().subtract(1, 'week').format(DATE_TIME_FORMAT));
        break;
      case 'month':
        setFromDate(moment().subtract(1, 'month').format(DATE_TIME_FORMAT));
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  const onChangeDeviceStatus = (checkedValue: Array<CheckboxValueType>) => {
    formik.setFieldValue('device_status', checkedValue);
  };

  const onChangeLostType = (e: RadioChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue('lost_type', value);
  };

  return {
    formik,
    onChangeQuickPeriod,
    handleClear,
    onChangeDeviceStatus,
    onChangeLostType,
  };
};

export default useForm;
