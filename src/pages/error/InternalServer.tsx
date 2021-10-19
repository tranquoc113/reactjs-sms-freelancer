import React from 'react';
import ErrorPage from 'src/components/application/ErrorPage';

export const PATH = '/500' as const;

const InternalServer: React.FC = () => {
  return <ErrorPage statusCode={500} />;
};

export default InternalServer;
