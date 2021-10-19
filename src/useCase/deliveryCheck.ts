import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/deliveryCheck';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'delivery_check/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await DeliveryCheckRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            const index = n + 1;
            return {
              id: index,
              deliveryDate: '2021/07/30',
              deliveryGroup: '대주AAA' + index,
              shipmentStore: ' 대주AAA' + index,
              holding: 'A빈_유모바일_' + index,
              division: '보유처_' + index,
              deviceName: 'SM550_' + index,
              actualPrice: '240000',
              serialNumber: '3040566_' + index,
              color: '색상',
              handler: '처리자',
              lastUpdated: '2021/07/30',
              uniqueNumber: '정상출고',
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
