import { useFormik } from 'formik';
import * as Yup from 'yup';

const useForm = () => {
  let defaultValue = {
    member_group: '',
  };

  const validationSchema = Yup.object().shape({
    member_group: Yup.string().nullable(true).required(),
  });

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    onSubmit(value) {
      console.log({ value });
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
