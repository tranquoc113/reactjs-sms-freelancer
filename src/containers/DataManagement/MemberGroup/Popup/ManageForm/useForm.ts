import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppSelector } from 'src/store';
import lodash from 'lodash';

const useForm = () => {
  const { entity, popupType } = useAppSelector(
    (state) => state.domain.memberGroup,
  );

  let defaultValue = {
    memberGroup: '',
  };

  defaultValue =
    !lodash.isEmpty(entity) && popupType === 'manage'
      ? { ...entity }
      : defaultValue;

  const validationSchema = Yup.object().shape({
    memberGroup: Yup.string().nullable(true).required(),
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
