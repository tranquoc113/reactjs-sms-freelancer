import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetList } from 'src/api/requests/memberGroup';
import appActions from 'src/store/ui/app';

export const fetchResources = createAsyncThunk<any, GetList>(
  'member_group/list',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // const res = await groupMemberRequest.getList(params);
      const res = {
        data: {
          count: 10,
          items: [...Array(10).keys()].map((n) => {
            return {
              id: n + 1,
              no: n + 1,
              memberGroup: `회원그룹 ${n}`,
              category: `판매점명 ${n}`,
              menuName: `회원속한사업자명 ${n}`,
              function: `대표자명 ${n}`,
              management: 4779 + n,
              lastModifiedBy: '$최초수정자',
              lastModifiedDate: '01-08-2021',
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
