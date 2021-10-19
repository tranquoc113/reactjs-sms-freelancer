import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IRouter } from 'src/interfaces/route';
import useAuth from 'src/hooks/useAuth';

const AuthenticatedRoute = ({ ...rest }: IRouter) => {
  const authInfo = useAuth();
  const Component = rest.component as React.FC<any>;

  if (authInfo) {
    return (
      <Route
        {...rest}
        component={undefined}
        render={(props) => <Component {...props} {...rest} />}
      />
    );
  }

  return (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
};

export default React.memo(AuthenticatedRoute);
