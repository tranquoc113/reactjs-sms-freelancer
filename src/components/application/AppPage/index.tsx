import React, { useEffect, useState } from 'react';
import { ParsedQuery } from 'query-string';
import { useParams } from 'react-router-dom';

import useQueryUrl from 'src/hooks/useQueryUrl';
import { Dispatch, Store, useAppDispatch, useAppStore } from 'src/store';
import { IRouter } from 'src/interfaces/route';
import AppPageHeader from 'src/components/layout/MainLayout/AppPageHeader';
import ContentWrapper from 'src/components/application/ContentWrapper';
import appActions from 'src/store/ui/app';
import LoadingPage from 'src/components/application/LoadingPage';

type Context = {
  query: ParsedQuery;
  store: Store;
  id?: number | string;
  dispatch: Dispatch;
};

type Props = {
  PATH: string;
  factory: () => Promise<{ default: React.ComponentType<any> }>;
  onMount?: (context: Context) => void;
  onLeave?: (context: Context) => void;
  onUpdateQuery?: (context: Context) => void;
  route: IRouter;
  initLoading?: boolean;
};

const AppPage: React.FC<Props & IRouter> = (props) => {
  const {
    factory,
    onMount,
    onUpdateQuery,
    onLeave,
    route,
    initLoading = true,
  } = props;
  const [Container] = useState<React.ComponentType>(React.lazy(factory));

  const query = useQueryUrl();
  const store = useAppStore();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const context = { store, id, query, dispatch };

  useEffect(() => {
    initLoading && dispatch(appActions.updateLoading(true));
    if (onMount) {
      onMount(context);
    }
    return () => {
      onLeave && onLeave(context);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onUpdateQuery && onUpdateQuery(context);
  }, [query]);

  return (
    <React.Suspense fallback={<LoadingPage size="small" />}>
      <ContentWrapper>
        <AppPageHeader title={route.title} />
        <Container />
      </ContentWrapper>
    </React.Suspense>
  );
};

export default React.memo(AppPage);
