import React, { useEffect } from 'react';
import { Grid } from 'antd';
import { Switch, Router, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import history from 'src/libs/history';
import routes from 'src/routes';
import loadable from 'src/utils/Loadable';

import RedirectRoute from './RedirectRoute';
import AuthenticatedRoute from './AuthenticateRoute';
import RestrictedRoute from './RestrictedRoute';
import LoadingPage from './LoadingPage';
import NotFound from 'src/pages/error/NotFound';
import { useAppDispatch } from 'src/store';
import appActions from 'src/store/ui/app';
import useDarkMode from 'src/hooks/useDarkMode';

const MainLayout = loadable(
  () => import('src/components/layout/MainLayout'),
  <LoadingPage />,
);

const Application: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const screen = Grid.useBreakpoint();
  useDarkMode();

  useEffect(() => {
    dispatch(appActions.updateCollapsed(!screen.xl));
  }, [screen]);

  const routesNoLayout = () => {
    const arr = routes(t).filter((r) => r.requiredAuth === false);
    return arr.map((r, i) => {
      if (r.restricted) {
        return <RestrictedRoute key={i} {...r} />;
      }
      return <Route key={i} {...r} />;
    });
  };

  return (
    <Router history={history}>
      <Switch>
        {routesNoLayout()}
        <Route
          path="/"
          render={() => {
            return (
              <MainLayout>
                <Switch>
                  {routes(t).map((route, key) => {
                    if (route.redirect) {
                      return <RedirectRoute key={key} {...route} />;
                    }

                    if (route.requiredAuth) {
                      return <AuthenticatedRoute key={key} {...route} />;
                    }

                    if (route.restricted) {
                      return <RestrictedRoute key={key} {...route} />;
                    }
                  })}
                  <Route component={NotFound} />
                </Switch>
              </MainLayout>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default Application;
