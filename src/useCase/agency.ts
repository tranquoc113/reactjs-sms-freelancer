import { createAsyncThunk } from '@reduxjs/toolkit';

import AgencyRequest, {
  GetDetail,
  GetList,
  PostAgency,
  PutAgency,
} from 'src/api/requests/agency';
import appActions from 'src/store/ui/app';
import notifyActions from 'src/store/ui/notification';

export const fetchResources = createAsyncThunk<any, GetList>(
  'agency/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const res = await AgencyRequest.getList(params);

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

export const detailAgency = createAsyncThunk<any, GetDetail>(
  'agency/detail',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await AgencyRequest.getDetail(payload);

      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const addAgency = createAsyncThunk<any, PostAgency>(
  'agency/add',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await AgencyRequest.createAgency(payload);

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

export const editAgency = createAsyncThunk<any, PutAgency>(
  'agency/edit',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const res = await AgencyRequest.updateAgency(payload);

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
