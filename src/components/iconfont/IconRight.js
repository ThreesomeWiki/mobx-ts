/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRight = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M723.1 483.4c-1.3-1.3-2.6-2.4-4-3.4L355.9 116c-14.6-14.6-38.4-14.6-53 0-14.6 14.6-14.6 38.5 0 53.1l340.4 341.2L302.9 851c-14.6 14.6-14.6 38.4 0 53 14.6 14.6 38.4 14.6 53 0l362.9-363.3c1.5-1.1 2.9-2.3 4.3-3.7 7.4-7.4 11-17.1 10.9-26.8 0.1-9.7-3.6-19.4-10.9-26.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRight.defaultProps = {
  size: 0.18,
};

export default IconRight;
