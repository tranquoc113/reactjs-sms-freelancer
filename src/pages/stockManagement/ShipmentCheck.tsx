import React from 'react';
import AppPage from 'src/components/application/AppPage';
import { IRouter } from 'src/interfaces/route';
import { fetchResources } from 'src/useCase/shipmentCheck';
import { PER } from 'src/constants/app';

export const PATH = '/stock/shipment-check' as const;

const Page: React.FC<IRouter> = (props) => {
  return (
    <AppPage
      route={props}
      PATH={PATH}
      factory={() => import('src/containers/StockManagement/ShipmentCheck')}
      onUpdateQuery={({ dispatch, query }) => {
        const { page, limit } = query;

        dispatch(
          fetchResources({
            ...query,
            page: page ? Number(page) : 1,
            limit: limit ? Number(limit) : PER.DEFAULT,
          }),
        );
      }}
    />
  );
};

export default Page;
