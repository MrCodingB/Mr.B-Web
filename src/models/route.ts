import { ComponentType } from 'react';

export interface IRoute {
  title: string;
  path: string;
  component: ComponentType;
  disabled?: boolean;
}
