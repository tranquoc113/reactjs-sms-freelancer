import React from 'react';
import AppPage from 'src/components/application/AppPage';
import { IRouter } from 'src/interfaces/route';
import {
  fetchResources,
  fetchStoreGroup,
} from 'src/useCase/DataStore/dataStore';
import { PER } from 'src/constants/app';

export const PATH = '/data/store/registration-modification' as const;

const Page: React.FC<IRouter> = (props) => {
  return (
    <AppPage
      route={props}
      PATH={PATH}
      factory={() =>
        import('src/containers/DataManagement/DataStore/RegisterModify')
      }
      onUpdateQuery={({ dispatch, query }) => {
        const { page, limit } = query;

        dispatch(
          fetchResources({
            ...query,
            page: page ? Number(page) : 1,
            limit: limit ? Number(limit) : PER.DEFAULT,
          }),
        );
        dispatch(fetchStoreGroup({}));
      }}
    />
  );
};

export default Page;
