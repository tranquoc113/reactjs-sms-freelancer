import React from 'react';
import AppPage from 'src/components/application/AppPage';
import { IRouter } from 'src/interfaces/route';
import { fetchResources } from 'src/useCase/user';
import { PER } from 'src/constants/app';

export const PATH = '/user/list' as const;

const Page: React.FC<IRouter> = (props) => {
  return (
    <AppPage
      route={props}
      PATH={PATH}
      factory={() => import('src/containers/UserList')}
      onUpdateQuery={({ dispatch, query }) => {
        const { page, limit } = query;

        dispatch(
          fetchResources({
            ...query,
            page: page ? Number(page) : 1,
            limit: limit ? Number(limit) : PER.USER,
          }),
        );
      }}
    />
  );
};

export default Page;
