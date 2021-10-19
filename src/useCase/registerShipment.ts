import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/registerShipment';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'register_shipment/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await RegisterShipmentRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              deliveryDate: '2021/07/30',
              deliveryGroup: '유자',
              agent: '태현 ',
              deviceName: 'SM550',
              unitPrice: '240000',
              serialNumber: '3040566',
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
