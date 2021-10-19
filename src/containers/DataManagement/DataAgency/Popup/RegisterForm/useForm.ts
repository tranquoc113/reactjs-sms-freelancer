import { useFormik } from 'formik';

import * as Yup from 'yup';
import lodash from 'lodash';
import { useAppDispatch, useAppSelector } from 'src/store';
import { addAgency, editAgency, fetchResources } from 'src/useCase/agency';
import { PostAgency, PutAgency } from 'src/api/requests/agency';
import appActions from 'src/store/ui/app';
import useQueryUrl from 'src/hooks/useQueryUrl';
import { PER } from 'src/constants/app';
import Patterns from 'src/constants/patterns';
import { searchAreas } from 'src/useCase/area';

const useForm = ({ t }) => {
  const { entity, popupType } = useAppSelector((state) => state.domain.agency);
  const dispatch = useAppDispatch();
  const query = useQueryUrl();

  let defaultValue = {
    id: '',
    name: '',
    company_name: '',
    manager_name: '',
    manager_phone: '',
    business_number: '',
    business_type_level_1: null,
    business_type_level_2: null,
    phone_contacts: [],
    email: '',
    tax_bill: '',
    fax: '',
    area_id: '',
    bank_name: '',
    depositor_name: '',
    account_number: '',
  };

  const validationSchema = Yup.object().shape({
    manager_name: Yup.string()
      .nullable(true)
      .required(t('message.manager_name.required')),
    name: Yup.string().nullable(true).required(t('message.name.required')),
    company_name: Yup.string()
      .nullable(true)
      .required(t('message.company_name.required')),
    manager_phone: Yup.string()
      .trim()
      .matches(
        Patterns.PHONE_NUMBER,
        t('message.manager_phone.phone_number_invalid'),
      )
      .required(t('message.manager_phone.required')),
    business_number: Yup.number()
      .typeError('message.business_number.format')
      .nullable(true)
      .required(t('message.business_number.required')),
    area_id: Yup.string()
      .nullable(true)
      .required(t('message.area_id.required')),
    email: Yup.string().email(t('message.email.inValid')),
    phone_contacts: Yup.array()
      .of(
        Yup.number()
          .typeError(t('message.phone_contacts.item.format'))
          .nullable(true),
      )
      .compact()
      .min(1, t('message.phone_contacts.min'))
      .required(t('message.phone_contacts.required')),
  });

  const handleCreate = async (val: PostAgency) => {
    // @ts-ignore
    const { error } = await dispatch(addAgency({ ...val }));
    if (error) {
      return null;
    }
    handleCloseModal();
  };

  const handleUpdate = async (payload: PutAgency) => {
    // @ts-ignore
    const { error } = await dispatch(editAgency(payload));
    if (error) {
      return null;
    }
    handleCloseModal();
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

  defaultValue =
    !lodash.isEmpty(entity) && popupType === 'update'
      ? {
          ...entity,
          business_type_level_1: entity.business_type_level_1.toString(),
          business_type_level_2: entity.business_type_level_2.toString(),
        }
      : defaultValue;

  if (!lodash.isEmpty(entity) && popupType === 'update') {
    dispatch(searchAreas({ keyword: entity?.area?.name, limit: 10 }));
  }

  const formik = useFormik<any>({
    initialValues: {
      ...defaultValue,
    },
    validationSchema,
    async onSubmit(value) {
      let data = {
        ...value,
        phone_contacts: value.phone_contacts.filter((string) => string?.trim()),
      };

      if (popupType === 'update') {
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

  return { formik, handleClear, handleCloseModal };
};

export default useForm;
