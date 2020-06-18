/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMenu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M128 256h768v85.333333H128V256m0 213.333333h768v85.333334H128v-85.333334m0 213.333334h768v85.333333H128v-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMenu.defaultProps = {
  size: 0.18,
};

export default IconMenu;
