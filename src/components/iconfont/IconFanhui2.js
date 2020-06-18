/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFanhui2 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M235.243243 512 740.625148 0 788.756757 97.523809 379.638073 512 788.756757 926.476177 740.625148 1024 235.243243 512Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFanhui2.defaultProps = {
  size: 0.18,
};

export default IconFanhui2;
