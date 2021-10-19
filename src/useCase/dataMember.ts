import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/dataMember';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'members/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await DataStoreRequest.getList(params);
      const res = {
        data: {
          count: 100,
          items: [...Array(100).keys()].map((n) => {
            return {
              id: n + 1,
              memberGroup: '미지정',
              memberId: '회원아이디',
              memberName: 'XXX',
              storeAgency: 'XX',
              ceoName: '대표자명',
              businessNumber: '010-1111-0000',
              phoneNumber: '010-1111-0000',
              memo: 'XXX',
              management: '',
              status: '회원가입 ',
              lastModifiedBy: 'XXX',
              lastModifiedDate: '2021-08-26',
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
