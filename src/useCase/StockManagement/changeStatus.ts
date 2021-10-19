import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/StockManagement/changeStatus';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'stock/change_status/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await StockStatusRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              status: '이력단말',
              processDate: '2021-10-04',
              nameHolder: '태평양(안산)',
              deviceName: 'TM-400',
              color: '블랙',
              note: '$메모',
              processor: '123456',
              serialNumber: '210719_00052',
              uniqueNumber: '210719_0005' + (n + 1),
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
