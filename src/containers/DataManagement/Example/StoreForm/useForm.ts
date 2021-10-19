import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import dataStoreActions from 'src/store/domain/DataStore/dataStore';

const useForm = () => {
  // const { t } = useTranslation();
  let defaultValue = {
    id: '',
    region: '',
    codeNumber: '',
    storeName: '',
    ceoName: '',
    businessRegistrationNumber: '',
    businessType: '',
    businessTypeDepth2: '',
    taxBill: '',
    email: '',
    phoneNumber: '',
    unitPrice: '',
    salespersonGroup: '',
    storeAddress: '',
    bankName: '',
    depositor: '',
    accountNumber: '',
    linkUrl: '',
    guaranteeInsurancePeriod: '',
  };

  const dispatch = useDispatch();
  const { entity, entities, typeForm } = useAppSelector(
    (state) => state.domain.datastore,
  );

  const handleSetDataStoreEdit = (idStore, typeForm) => {
    const dataStore = entities.find((item) => item.id === idStore);
    if (dataStore) {
      dispatch(dataStoreActions.setDataStore({ dataStore, typeForm }));
    }
  };

  const validationSchema = Yup.object().shape({
    businessName: Yup.string().nullable(true).required(),
    ceoName: Yup.string().nullable(true).required(),
    businessNumber: Yup.string().nullable(true).required(),
    unitPrice: Yup.string().nullable(true).required(),
  });

  // defaultValue = entity && typeForm && entity;
  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    onSubmit(value) {
      alert('asf');
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
