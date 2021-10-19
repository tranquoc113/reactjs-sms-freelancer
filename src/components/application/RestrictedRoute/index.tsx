import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IRouter } from 'src/interfaces/route';
import useAuth from 'src/hooks/useAuth';

const RestrictedRoute = ({ ...rest }: IRouter) => {
  const authInfo = useAuth();
  const Component = rest.component as React.FC<any>;

  return (
    <Route
      {...rest}
      component={undefined}
      render={(props) =>
        authInfo ? (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default React.memo(RestrictedRoute);
