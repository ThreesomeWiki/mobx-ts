/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFanhui = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M269.9 455.6L682.6 90.3c11.8-10.4 29.9-9.3 40.4 2.5 10.4 11.8 9.3 29.9-2.5 40.4L307.8 498.4c-11.8 10.4-29.9 9.3-40.4-2.5-10.4-11.7-9.3-29.9 2.5-40.3z"
        fill={getIconColor(color, 0, '#828282')}
      />
      <path
        d="M720.5 820L307.8 454.8c-11.8-10.4-29.9-9.3-40.4 2.5-10.4 11.8-9.3 29.9 2.5 40.4l412.8 365.2c11.8 10.4 29.9 9.3 40.4-2.5 10.3-11.8 9.2-30-2.6-40.4z"
        fill={getIconColor(color, 1, '#828282')}
      />
    </svg>
  );
};

IconFanhui.defaultProps = {
  size: 0.18,
};

export default IconFanhui;
