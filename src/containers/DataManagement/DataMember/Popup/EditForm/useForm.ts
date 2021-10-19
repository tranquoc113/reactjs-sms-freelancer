import { useFormik } from 'formik';
import { useAppSelector } from 'src/store';

const useForm = () => {
  const { entity } = useAppSelector((state) => state.domain.dataMember);

  let defaultValue = {
    memo: '',
    memberGroup: '',
  };
  defaultValue = entity;
  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
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
