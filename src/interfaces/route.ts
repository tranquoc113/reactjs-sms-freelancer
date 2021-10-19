import React from 'react';
import { RouteProps } from 'react-router';

export interface IRouter extends RouteProps {
  requiredAuth?: boolean;
  restricted?: boolean;
  redirect?: boolean;
  redirectPath?: string;
  children?: IRouter[];
  icon?: React.ReactNode;
  title?: React.ReactNode;
  parent?: string;
  subMenu?: string;
  isSubmenu?: boolean;
}
