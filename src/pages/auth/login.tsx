import React from 'react';
import { IRouter } from 'src/interfaces/route';
import Container from 'src/containers/Auth/Login';

export const PATH = '/login';

const Page: React.FC<IRouter> = (props) => {
  return <Container />;
};

export default Page;
