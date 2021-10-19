import { useFormik } from 'formik';
import * as Yup from 'yup';
import lodash from 'lodash';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import {
  fetchResources,
  addStoreRegistrantion,
  editStoreRegistration,
} from 'src/useCase/DataStore/dataStore';
import { PER } from 'src/constants/app';
import appActions from 'src/store/ui/app';
import useQueryUrl from 'src/hooks/useQueryUrl';
import {
  PostStoreRegistration,
  PutStoreRegistration,
} from 'src/api/requests/dataStore';

const useForm = ({ t }) => {
  const dispatch = useDispatch();
  const query = useQueryUrl();
  const { entity, typeForm, storeGroup } = useAppSelector(
    (state) => state.domain.datastore,
  );

  let defaultValue = {
    id: '',
    store_group_id: '',
    salesperson_id: '1',
    name: '',
    manager_name: '',
    business_number: '',
    business_type_level_1: '1',
    business_type_level_2: '1',
    tax_bill: '',
    email: '',
    fax: '',
    area_id: '',
    address: '',
    bank_name: '',
    depositor_name: '',
    account_number: '',
    url: '',
    insured_date_from: '',
    insured_date_to: '',
    unit_price_id: '4',
    contacts: [],
  };

  let resultStoreGroup: any = [];
  storeGroup?.data?.forEach((item) => {
    resultStoreGroup.push({
      value: item.id,
      label: item.name,
    });
  });

  const validationSchema = Yup.object().shape({
    // unit_price_id: Yup.string()
    //   .nullable(true)
    //   .required(t('message.unit_price.required')),
    area_id: Yup.number().required(t('message.area_id.required')),
    store_group_id: Yup.number().required(t('message.store_group_id.required')),
    salesperson_id: Yup.number().required(t('message.salesperson_id.required')),
    name: Yup.string().nullable(true).required(t('message.name.required')),
    manager_name: Yup.string().required(t('message.manager_name.required')),
    business_number: Yup.number()
      .typeError('message.business_number.format')
      .required(t('message.business_number.required')),
    insured_date_from: Yup.date()
      .nullable(true)
      .required(t('message.insured_date_from.required')),
    insured_date_to: Yup.date()
      .nullable(true)
      .when('insured_date_from', (insured_date_from, schema) => {
        if (!insured_date_from) {
          return;
        }
        return schema.min(insured_date_from, t('Please enter six start dates'));
      })
      .required(t('message.insured_date_to.required')),
    business_type_level_1: Yup.number()
      .typeError('message.business_type_level_1.format')
      .required(t('message.business_type_level_1.required')),
    business_type_level_2: Yup.number()
      .typeError('message.business_type_level_2.format')
      .required(t('message.business_type_level_2.required')),
    email: Yup.string().email(t('message.email.inValid')),
    contacts: Yup.array()
      .of(
        Yup.number()
          .typeError(t('message.contacts.item.format'))
          .nullable(true),
      )
      .compact()
      .min(1, t('message.contacts.min'))
      .required(t('message.contacts.required')),
    unit_price_id: Yup.number().required(t('message.unit_price_id.required')),
  });

  defaultValue =
    !lodash.isEmpty(entity) && typeForm === 'update'
      ? { ...entity }
      : defaultValue;

  const handleCreate = async (val: PostStoreRegistration) => {
    // @ts-ignore
    const { error } = await dispatch(addStoreRegistrantion({ ...val }));
    if (error) {
      return null;
    }
    handleCloseModal();
  };

  const handleUpdate = async (payload: PutStoreRegistration) => {
    // @ts-ignore
    const { error } = await dispatch(editStoreRegistration(payload));
    if (error) {
      return null;
    }
    handleCloseModal();
  };

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    async onSubmit(value) {
      let data = {
        ...value,
        contacts: value.contacts?.filter((string) => string?.trim()),
      };
      if (typeForm === 'update') {
        await handleUpdate({ id: entity.id, payload: { ...data } });
      } else {
        await handleCreate(data);
      }
    },
    enableReinitialize: true,
  });

  const handleClear = () => {
    formik.setValues(defaultValue);
    formik.submitForm();
  };

  const handleCloseModal = () => {
    const { page, limit } = query;

    dispatch(
      fetchResources({
        ...query,
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : PER.DEFAULT,
      }),
    );

    dispatch(appActions.updateVisibleModal(false));
  };

  return {
    formik,
    typeForm,
    entity,
    handleClear,
    handleCloseModal,
    resultStoreGroup,
  };
};

export default useForm;
