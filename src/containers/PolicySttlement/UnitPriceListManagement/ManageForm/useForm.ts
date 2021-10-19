import { useFormik } from 'formik';
import { RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import unitPriceListActions from 'src/store/domain/unitPriceList';
import { useDispatch } from 'react-redux';

const useForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const defaultValue = {
    store_group: '',
    buying_method: '',
    version: '',
    unit: '',
    from_date: '',
    from_time: '',
    to_date: '',
    to_time: '',
    template: '',
  };

  const validationSchema = Yup.object().shape({
    from_date: Yup.date().nullable(true).required(),
    to_date: Yup.date()
      .nullable(true)
      .when('from_date', (from_date, schema) => {
        if (!from_date) {
          return;
        }
        return schema.min(from_date, t('validated.to_date'));
      })
      .required(),
    store_group: Yup.string().nullable(true).required(),
    buying_method: Yup.string().nullable(true).required(),
    version: Yup.string().nullable(true).required(),
    unit: Yup.string().nullable(true).required(),
    from_time: Yup.string().nullable(true).required(),
    to_time: Yup.string().nullable(true).required(),
    template: Yup.string().nullable(true).required(),
  });

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    onSubmit(value) {
      dispatch(unitPriceListActions.setUnitPriceList(true));
    },
    enableReinitialize: true,
  });

  const onChangeBuyingMethod = (e: RadioChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue('buying_method', value);
  };

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
    dispatch(unitPriceListActions.setUnitPriceList(false));
  };

  return { formik, onChangeBuyingMethod, handleClear };
};

export default useForm;
