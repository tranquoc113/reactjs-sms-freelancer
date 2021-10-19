import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import dataMemberActions from 'src/store/domain/dataMember';

const useForm = () => {
  // const { t } = useTranslation();
  let defaultValue = {
    memberId: '',
    name: '',
    businessName: '',
    phoneNumber: '',
    memo: '',
    email: '',
    memberGroup: '',
  };

  const dispatch = useDispatch();
  const { entity, entities, typeForm } = useAppSelector(
    (state) => state.domain.dataMember,
  );

  const handleSetDataStoreEdit = (idStore, typeForm) => {
    const dataMember = entities.find((item) => item.id === idStore);
    if (dataMember) {
      dispatch(dataMemberActions.setDataMember({ dataMember, typeForm }));
    }
  };

  const validationSchema = Yup.object().shape({
    memberId: Yup.string().nullable(true).required(),
    name: Yup.string().nullable(true).required(),
    phoneNumber: Yup.string().nullable(true).required(),
    email: Yup.string().nullable(true).required(),
  });

  const formik = useFormik<SearchParams.DataMember>({
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
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  return { formik, typeForm, entity, handleClear, handleSetDataStoreEdit };
};

export default useForm;
