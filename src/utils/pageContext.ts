import React from 'react';

const createContext = <T>(value?: T) =>
  React.createContext<T | undefined>(value);

export default createContext;
