/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconArrow = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512.11689453 611.29970703l-256.78125-256.77685547c-10.78417969-10.79296875-28.28847656-10.79296875-39.07353516 0-10.79384765 10.78417969-10.79384766 28.28847656 0 39.07353516l276.31757813 276.31757812c10.78417969 10.79296875 28.28847656 10.79296875 39.07353516 0l276.31669921-276.31757812c5.39648438-5.39296875 8.09560547-12.46552734 8.09560547-19.53632813s-2.69912109-14.14335937-8.09560546-19.53632812c-10.78417969-10.79296875-28.28847656-10.79296875-39.07353516-1e-8l-256.7803711 256.77685548z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconArrow.defaultProps = {
  size: 0.18,
};

export default IconArrow;
