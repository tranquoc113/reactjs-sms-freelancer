import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/dataStore';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'connection_approval/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await DataStoreRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              member_id: `231${n + 1}`,
              member_name: 'xxx' + n,
              business_name: `판매점 ${n}`,
              business_number: 23145678 + n,
              ceo_name: `대표자명 ${n}`,
              phone_number: 23145678 + n,
              memo: `업태_${n}`,
              management: '업종',
              connect: n % 4 ? 1 : 0,
              status: '연결됨',
              update_user: 'xxx',
              update_time: '2021-08-26',
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
