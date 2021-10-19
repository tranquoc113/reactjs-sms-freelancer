import { useFormik } from 'formik';

const useForm = () => {
  const defaultValue = {
    plan: '',
  };

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    onSubmit(value) {},
    enableReinitialize: true,
  });

  return { formik };
};

export default useForm;
