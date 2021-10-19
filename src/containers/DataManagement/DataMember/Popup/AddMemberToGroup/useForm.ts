import { useFormik } from 'formik';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const useForm = () => {
  let defaultValue = {
    storeAgency: '',
    listMember: '',
    memberGroup: '',
  };

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

  const onChangeListMember = (checkedValue: Array<CheckboxValueType>) => {
    formik.setFieldValue('listMember', checkedValue);
  };

  return { formik, handleClear, onChangeListMember };
};

export default useForm;
