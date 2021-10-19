import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/stockStatus';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'stock_status/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await StockStatusRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              type: '단말기',
              deliveryDate: '7/23',
              agency: '태현',
              releaseDate: '7/19',
              store: 'A빈_유모바일',
              groupStore: '(안양)_P278823 유자',
              deviceName: 'SM-T385L',
              serialNumber: '205086',
              shippingUnitPrice: '308,000',
              color: '블랙',
              status: '분실',
              detailType: '분실',
              updateUser: '박성근',
              updateTime: '2021-08-01',
              uniqueNumber: '210719_0001205086',
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
