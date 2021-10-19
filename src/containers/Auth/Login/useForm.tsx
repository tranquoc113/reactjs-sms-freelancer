import { useFormik } from 'formik';
import * as Yup from 'yup';

import { PostLogin, login } from 'src/useCase/auth';
import { useAppDispatch } from 'src/store';
import { useTranslation } from 'react-i18next';

type Credentials = {
  email?: string;
  password?: string;
};

const useForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogin = async (val: PostLogin) => {
    await dispatch(login(val));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validated.email'))
      .required(t('validated.required', { name: t('email') })),
    password: Yup.string().required(
      t('validated.required', { name: t('password') }),
    ),
  });

  const formik = useFormik<Credentials>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    async onSubmit(values, meta) {
      await handleLogin({ credentials: values, meta, t });
    },
  });

  return { formik };
};

export default useForm;
