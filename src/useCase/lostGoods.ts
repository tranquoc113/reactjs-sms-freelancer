import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/lostGoods';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'lost/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await RegisterShipmentRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              stateClassification: '처리대기',
              processingDate: '210807',
              deliveryDate: '210701',
              receiverName: '태안(AAA)',
              wear: '800000',
              releaseDate: '210801',
              shipmentName: 'XXX',
              memo: '처리대기',
              serialNumber: '123456',
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
