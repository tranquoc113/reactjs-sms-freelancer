import { useFormik } from 'formik';
import * as Yup from 'yup';
import lodash from 'lodash';
import { useAppSelector } from 'src/store';

const useForm = (record) => {
  let defaultValue = {
    id: '',
    memo: '',
  };

  const { entity, typeForm } = useAppSelector(
    (state) => state.domain.ConnectionApproval,
  );

  const validationSchema = Yup.object().shape({
    memo: Yup.string().nullable(true).required(),
  });

  defaultValue = !lodash.isEmpty(record) ? { ...record } : defaultValue;

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    onSubmit(value) {
      console.log(value);
    },
    enableReinitialize: true,
  });

  const handleClear = () => {
    formik.resetForm();
  };

  return { formik, typeForm, entity, handleClear };
};

export default useForm;
