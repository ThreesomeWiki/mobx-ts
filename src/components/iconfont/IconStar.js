/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconStar = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 768l-174.250667 91.605333a42.666667 42.666667 0 0 1-61.909333-44.970666l33.28-194.048-141.013333-137.386667a42.666667 42.666667 0 0 1 23.68-72.832l194.816-28.288 87.125333-176.554667a42.666667 42.666667 0 0 1 76.544 0l87.125333 176.554667 194.816 28.288a42.666667 42.666667 0 0 1 23.68 72.789333l-141.013333 137.429334 33.28 194.048a42.666667 42.666667 0 0 1-61.866667 44.970666L512 768z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IconStar.defaultProps = {
  size: 0.18,
};

export default IconStar;
