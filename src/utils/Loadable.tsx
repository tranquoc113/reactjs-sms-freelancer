import React, { lazy, Suspense } from 'react';

const loadable = (
  importFunc: () => Promise<any>,
  fallback: React.ReactElement | null = null,
) => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
