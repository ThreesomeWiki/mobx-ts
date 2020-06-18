/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'jewelry' | 'fanhui2' | 'heart' | 'menu' | 'camera-b' | 'arrow' | 'search' | 'right' | 'huanyipi' | 'fanhui' | 'Star';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
