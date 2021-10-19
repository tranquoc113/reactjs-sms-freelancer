import React from 'react';
import { Redirect } from 'react-router-dom';

import { IRouter } from 'src/interfaces/route';

const RedirectRoute = ({ redirectPath }: IRouter) => {
  return (
    <Redirect
      to={{
        pathname: redirectPath,
      }}
    />
  );
};

export default React.memo(RedirectRoute);
