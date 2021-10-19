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
              releaseDate: '2021/07/30',
              warehousingAgency: '대주AAA' + index,
              outletStore: ' 대주AAA' + index,
              deliveryDate: 'A빈_유모바일_' + index,
              storeGroup: '보유처_' + index,
              terminalName: 'SM550_' + index,
              serialNumber: '3040566_' + index,
              shippingUnitPrice: '색상',
              colorName: '처리자',
              currentStatus: '2021/07/30',
              manager: '정상출고',
              lastUpdated: '2021/07/30',
              uniqueNumber: '210719_0005205066',
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
