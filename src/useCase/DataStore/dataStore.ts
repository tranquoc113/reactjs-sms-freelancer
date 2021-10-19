import { createAsyncThunk } from '@reduxjs/toolkit';

import DataStoreRequest, {
  GetList,
  PostStoreRegistration,
  PutStoreRegistration,
  GetDetail,
  GetListStoreGroup,
} from 'src/api/requests/dataStore';
import appActions from 'src/store/ui/app';
import notifyActions from 'src/store/ui/notification';
import actionsDataStore from 'src/store/domain/DataStore/dataStore';

export const fetchResources = createAsyncThunk<any, GetList>(
  '/store/registration-modification/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const res = await DataStoreRequest.getList(params);
      dispatch(
        appActions.updatePagination({
          total: res.data.data.count,
          current: params.page!,
        }),
      );

      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const addStoreRegistrantion = createAsyncThunk<
  any,
  PostStoreRegistration
>(
  'store/registration-modification/create',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await DataStoreRequest.createStoreRegistration(payload);
      return res.data;
    } catch (err: any) {
      dispatch(
        notifyActions.onNotification({
          type: 'error',
          message: err.response.data.errors[0]?.message,
        }),
      );
      return rejectWithValue(err.response.data.errors[0]?.message);
    }
  },
);

export const detailStoresRegistration = createAsyncThunk<any, GetDetail>(
  'store/registration-modification/detail',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await DataStoreRequest.getDetail(payload);

      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const editStoreRegistration = createAsyncThunk<
  any,
  PutStoreRegistration
>(
  'store/registration-modification/update',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await DataStoreRequest.updateStoreRegistration(payload);

      return res.data;
    } catch (err: any) {
      dispatch(
        notifyActions.onNotification({
          type: 'error',
          message: err.response.data.errors[0]?.message,
        }),
      );
      return rejectWithValue(err.response.data.errors[0]?.message);
    }
  },
);

export const fetchStoreGroup = createAsyncThunk<any, GetListStoreGroup>(
  '/store/stores-group',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const res = await DataStoreRequest.getListStoreGroup(params);
      dispatch(
        actionsDataStore.setDataStoreGroup({
          storeGroup: res.data,
        }),
      );
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.data);
    }
  },
);
