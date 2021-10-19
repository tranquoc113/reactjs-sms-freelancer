import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/costList';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'cost/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const res = {
        data: {
          count: 10,
          items: [...Array(10).keys()].map((n) => {
            return {
              id: n + 1,
              name_model: `SM-G981NW ${n}`,
              group: `${n}`,
              new: ``,
              number_movement: ``,
              change: ``,
            };
          }),
        },
      };

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
