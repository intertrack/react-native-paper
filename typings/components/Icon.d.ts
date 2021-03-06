import * as React from 'react';
import { ThemeShape, IconSource } from '../types';

export interface IconProps {
  source: IconSource;
  size?: number;
  color?: string;
  style?: any;
  theme?: ThemeShape;
}

export declare class Icon extends React.Component<IconProps> {}