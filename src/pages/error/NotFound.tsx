import React from 'react';
import ErrorPage from 'src/components/application/ErrorPage';

export const PATH = '/404' as const;

const NotFound: React.FC = () => {
  return <ErrorPage statusCode={404} />;
};

export default NotFound;
