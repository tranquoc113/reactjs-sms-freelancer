import { FormikHelpers } from 'formik';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import _ from 'lodash';

import authRequest from 'src/api/requests/auth';
import meRequest from 'src/api/requests/me';
import LocalStorage from 'src/utils/LocalStorage';
import history from 'src/libs/history';
import appActions from 'src/store/ui/app';

export interface PostLogin {
  credentials: {
    email?: string;
    password?: string;
  };
  meta: FormikHelpers<any>;
  t: TFunction;
}

export const me = createAsyncThunk<any, string>(
  'me',
  async (token, { dispatch, rejectWithValue }) => {
    try {
      const res = await meRequest.me(token);
      dispatch(appActions.updateAuthInfo(res.data.data));
    } catch (err: any) {
      rejectWithValue(err.response.data);
    }
  },
);

export const login = createAsyncThunk<any, PostLogin>(
  'login',
  async ({ credentials, meta, t }, { dispatch, rejectWithValue }) => {
    try {
      const res = await authRequest.postLogin(credentials);

      const token = _.get(res.data, 'data.access_token');
      LocalStorage.setToken(token);

      await dispatch(me(token));

      meta.setStatus(undefined);
      history.push('/');
    } catch (err) {
      rejectWithValue('message.login_failed');
      meta.setStatus({ hasError: true, message: t('message.login_failed') });
    }
  },
);

// export const login = ({ credentials, meta, t }: PostLogin): Action => {
//   return async () => {
//     try {
//       const res = await authRequest.postLogin(credentials);
//
//       LocalStorage.setToken(res.data.data);
//       history.push('/');
//       meta.setStatus(undefined);
//     } catch (err) {
//       meta.setStatus({ hasError: true, message: t('message.login_failed') });
//     }
//   };
// };
