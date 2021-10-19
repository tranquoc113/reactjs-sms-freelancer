import { createAsyncThunk } from '@reduxjs/toolkit';

import userRequest, { GetList, PutUser } from 'src/api/requests/user';
import notifyActions from 'src/store/ui/notification';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'user/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const res = await userRequest.getList(params);

      dispatch(
        appActions.updatePagination({
          total: res.data.count,
          current: params.page!,
        }),
      );

      return res.data.items;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const editUser = createAsyncThunk<any, PutUser>(
  'user/edit',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await userRequest.updateUser(payload);

      return res.data;
    } catch (err: any) {
      dispatch(
        notifyActions.onNotification({
          type: 'error',
          message: err.response.data,
        }),
      );
      return rejectWithValue(err.response.data);
    }
  },
);
